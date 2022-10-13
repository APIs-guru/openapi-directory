from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListFirewallsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFirewallsRequest:
    query_params: ListFirewallsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListFirewalls200ApplicationJSONLinksPages1:
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    

@dataclass_json
@dataclass
class ListFirewalls200ApplicationJSONLinksPages2:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListFirewalls200ApplicationJSONLinks:
    pages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class ListFirewalls200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ListFirewalls200ApplicationJSON:
    firewalls: Optional[List[shared.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewalls' }})
    links: Optional[ListFirewalls200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: ListFirewalls200ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class ListFirewalls401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListFirewallsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_firewalls_200_application_json_object: Optional[ListFirewalls200ApplicationJSON] = field(default=None)
    list_firewalls_401_application_json_object: Optional[ListFirewalls401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
