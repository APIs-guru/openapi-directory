from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class ListAllDomains200ApplicationJSONDomains:
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    zone_file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone_file' }})
    

@dataclass_json
@dataclass
class ListAllDomains200ApplicationJSONLinksPages1:
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    

@dataclass_json
@dataclass
class ListAllDomains200ApplicationJSONLinksPages2:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListAllDomains200ApplicationJSONLinks:
    pages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class ListAllDomains200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ListAllDomains200ApplicationJSON:
    domains: List[ListAllDomains200ApplicationJSONDomains] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    links: Optional[ListAllDomains200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: ListAllDomains200ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class ListAllDomains401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListAllDomainsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_all_domains_200_application_json_object: Optional[ListAllDomains200ApplicationJSON] = field(default=None)
    list_all_domains_401_application_json_object: Optional[ListAllDomains401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
