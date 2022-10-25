from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListAppsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAppsRequest:
    query_params: ListAppsQueryParams = field(default=None)
    
class ListApps200ApplicationJSONAppsDomainsPhaseEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PENDING = "PENDING"
    CONFIGURING = "CONFIGURING"
    ACTIVE = "ACTIVE"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class ListApps200ApplicationJSONAppsDomainsProgress:
    steps: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    

@dataclass_json
@dataclass
class ListApps200ApplicationJSONAppsDomains:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    phase: Optional[ListApps200ApplicationJSONAppsDomainsPhaseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phase' }})
    progress: Optional[ListApps200ApplicationJSONAppsDomainsProgress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    spec: Optional[shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    

@dataclass_json
@dataclass
class ListApps200ApplicationJSONAppsGeographicalInformationAboutAnAppOrigin:
    continent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continent' }})
    data_centers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_centers' }})
    default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    flag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flag' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    

@dataclass_json
@dataclass
class ListApps200ApplicationJSONApps:
    active_deployment: Optional[shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active_deployment' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_ingress: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_ingress' }})
    domains: Optional[List[ListApps200ApplicationJSONAppsDomains]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    in_progress_deployment: Optional[shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in_progress_deployment' }})
    last_deployment_created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_deployment_created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    live_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'live_domain' }})
    live_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'live_url' }})
    live_url_base: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'live_url_base' }})
    owner_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner_uuid' }})
    region: Optional[ListApps200ApplicationJSONAppsGeographicalInformationAboutAnAppOrigin] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    spec: shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    tier_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier_slug' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class ListApps200ApplicationJSON:
    apps: Optional[List[ListApps200ApplicationJSONApps]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apps' }})
    links: Optional[shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf1PropertiesLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: Optional[shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf2PropertiesMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class ListApps401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListAppsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_apps_200_application_json_object: Optional[ListApps200ApplicationJSON] = field(default=None)
    list_apps_401_application_json_object: Optional[ListApps401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
