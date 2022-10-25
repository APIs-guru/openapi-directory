from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class CreateFloatingIPRequestBodyAssignToDroplet:
    droplet_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet_id' }})
    

@dataclass_json
@dataclass
class CreateFloatingIPRequestBodyReserveToRegion:
    region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    

@dataclass
class CreateFloatingIPRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateFloatingIP202ApplicationJSONLinks:
    actions: Optional[List[shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    droplets: Optional[List[shared.Onev21dropletsPostResponses202ContentApplication1jsonSchemaOneOf0PropertiesLinksPropertiesActionsItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplets' }})
    

@dataclass_json
@dataclass
class CreateFloatingIP202ApplicationJSON:
    floating_ip: Optional[shared.Onev21floatingIpsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFloatingIpsItems] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floating_ip' }})
    links: Optional[CreateFloatingIP202ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    

@dataclass_json
@dataclass
class CreateFloatingIP401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class CreateFloatingIPResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_floating_ip_202_application_json_object: Optional[CreateFloatingIP202ApplicationJSON] = field(default=None)
    create_floating_ip_401_application_json_object: Optional[CreateFloatingIP401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
