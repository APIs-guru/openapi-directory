from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class ListFloatingIps200ApplicationJSONFloatingIpsRegion:
    available: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    features: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'features' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    sizes: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizes' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    

@dataclass_json
@dataclass
class ListFloatingIps200ApplicationJSONFloatingIps:
    droplet: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droplet' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    region: Optional[ListFloatingIps200ApplicationJSONFloatingIpsRegion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    

@dataclass_json
@dataclass
class ListFloatingIps200ApplicationJSONLinksPages1:
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    

@dataclass_json
@dataclass
class ListFloatingIps200ApplicationJSONLinksPages2:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListFloatingIps200ApplicationJSONLinks:
    pages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class ListFloatingIps200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ListFloatingIps200ApplicationJSON:
    floating_ips: Optional[List[ListFloatingIps200ApplicationJSONFloatingIps]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floating_ips' }})
    links: Optional[ListFloatingIps200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: ListFloatingIps200ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class ListFloatingIps401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListFloatingIpsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_floating_ips_200_application_json_object: Optional[ListFloatingIps200ApplicationJSON] = field(default=None)
    list_floating_ips_401_application_json_object: Optional[ListFloatingIps401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
