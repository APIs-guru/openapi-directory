from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import _1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items
from . import _1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_domains_items
from . import _1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items
from . import _1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec

class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    PENDING = "PENDING"
    CONFIGURING = "CONFIGURING"
    ACTIVE = "ACTIVE"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress:
    steps: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    

@dataclass_json
@dataclass
class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    phase: Optional[Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsPhaseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phase' }})
    progress: Optional[Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomainsProgress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    spec: Optional[_1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec_properties_domains_items.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecPropertiesDomainsItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    

@dataclass_json
@dataclass
class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsRegionGeographicalInformationAboutAnAppOrigin:
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
class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems:
    active_deployment: Optional[_1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active_deployment' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_ingress: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_ingress' }})
    domains: Optional[List[Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    in_progress_deployment: Optional[_1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in_progress_deployment' }})
    last_deployment_created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_deployment_created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    live_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'live_domain' }})
    live_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'live_url' }})
    live_url_base: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'live_url_base' }})
    owner_uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner_uuid' }})
    region: Optional[Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsRegionGeographicalInformationAboutAnAppOrigin] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    spec: _1v2_1apps_1_7bapp_id_7d_1deployments_get_responses_200_content_application_1json_schema_properties_deployments_items_properties_spec.Onev21apps1Percent7BappIDPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    tier_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier_slug' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
