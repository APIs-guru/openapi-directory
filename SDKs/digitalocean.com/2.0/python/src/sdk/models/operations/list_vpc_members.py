from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListVpcMembersPathParams:
    vpc_id: str = field(default=None, metadata={'path_param': { 'field_name': 'vpc_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListVpcMembersQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    resource_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'resource_type', 'style': 'form', 'explode': True }})
    

@dataclass
class ListVpcMembersRequest:
    path_params: ListVpcMembersPathParams = field(default=None)
    query_params: ListVpcMembersQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListVpcMembers200ApplicationJSONLinksPages1:
    last: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    

@dataclass_json
@dataclass
class ListVpcMembers200ApplicationJSONLinksPages2:
    first: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first' }})
    prev: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListVpcMembers200ApplicationJSONLinks:
    pages: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    

@dataclass_json
@dataclass
class ListVpcMembers200ApplicationJSONMembers:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    urn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urn' }})
    

@dataclass_json
@dataclass
class ListVpcMembers200ApplicationJSONMeta:
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class ListVpcMembers200ApplicationJSON:
    links: Optional[ListVpcMembers200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    members: Optional[List[ListVpcMembers200ApplicationJSONMembers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    meta: ListVpcMembers200ApplicationJSONMeta = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass_json
@dataclass
class ListVpcMembers401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class ListVpcMembersResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    list_vpc_members_200_application_json_object: Optional[ListVpcMembers200ApplicationJSON] = field(default=None)
    list_vpc_members_401_application_json_object: Optional[ListVpcMembers401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
