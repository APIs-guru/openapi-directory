from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ListSessionsOfGroupUsingGetQueryParams:
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ListSessionsOfGroupUsingGet200ApplicationJSONDataSessions:
    author_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorID') }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupID') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    valid_until: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntil') }})
    

@dataclass_json
@dataclass
class ListSessionsOfGroupUsingGet200ApplicationJSONData:
    sessions: Optional[List[ListSessionsOfGroupUsingGet200ApplicationJSONDataSessions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessions') }})
    

@dataclass_json
@dataclass
class ListSessionsOfGroupUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[ListSessionsOfGroupUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ListSessionsOfGroupUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ListSessionsOfGroupUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ListSessionsOfGroupUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ListSessionsOfGroupUsingGetRequest:
    query_params: ListSessionsOfGroupUsingGetQueryParams = field()
    

@dataclass
class ListSessionsOfGroupUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    list_sessions_of_group_using_get_200_application_json_object: Optional[ListSessionsOfGroupUsingGet200ApplicationJSON] = field(default=None)
    list_sessions_of_group_using_get_400_application_json_object: Optional[ListSessionsOfGroupUsingGet400ApplicationJSON] = field(default=None)
    list_sessions_of_group_using_get_401_application_json_object: Optional[ListSessionsOfGroupUsingGet401ApplicationJSON] = field(default=None)
    list_sessions_of_group_using_get_500_application_json_object: Optional[ListSessionsOfGroupUsingGet500ApplicationJSON] = field(default=None)
    
