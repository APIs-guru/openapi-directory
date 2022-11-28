from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class ListSessionsOfAuthorUsingGetQueryParams:
    author_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authorID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class ListSessionsOfAuthorUsingGet200ApplicationJSONDataSessions:
    author_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorID') }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupID') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    valid_until: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntil') }})
    

@dataclass_json
@dataclass
class ListSessionsOfAuthorUsingGet200ApplicationJSONData:
    sessions: Optional[List[ListSessionsOfAuthorUsingGet200ApplicationJSONDataSessions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessions') }})
    

@dataclass_json
@dataclass
class ListSessionsOfAuthorUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[ListSessionsOfAuthorUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ListSessionsOfAuthorUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ListSessionsOfAuthorUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ListSessionsOfAuthorUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ListSessionsOfAuthorUsingGetRequest:
    query_params: ListSessionsOfAuthorUsingGetQueryParams = field()
    

@dataclass
class ListSessionsOfAuthorUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    list_sessions_of_author_using_get_200_application_json_object: Optional[ListSessionsOfAuthorUsingGet200ApplicationJSON] = field(default=None)
    list_sessions_of_author_using_get_400_application_json_object: Optional[ListSessionsOfAuthorUsingGet400ApplicationJSON] = field(default=None)
    list_sessions_of_author_using_get_401_application_json_object: Optional[ListSessionsOfAuthorUsingGet401ApplicationJSON] = field(default=None)
    list_sessions_of_author_using_get_500_application_json_object: Optional[ListSessionsOfAuthorUsingGet500ApplicationJSON] = field(default=None)
    
