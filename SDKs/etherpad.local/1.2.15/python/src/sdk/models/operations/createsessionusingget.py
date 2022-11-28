from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CreateSessionUsingGetQueryParams:
    author_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authorID', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupID', 'style': 'form', 'explode': True }})
    valid_until: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'validUntil', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateSessionUsingGet200ApplicationJSONData:
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionID') }})
    

@dataclass_json
@dataclass
class CreateSessionUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[CreateSessionUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class CreateSessionUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class CreateSessionUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class CreateSessionUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class CreateSessionUsingGetRequest:
    query_params: CreateSessionUsingGetQueryParams = field()
    

@dataclass
class CreateSessionUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    create_session_using_get_200_application_json_object: Optional[CreateSessionUsingGet200ApplicationJSON] = field(default=None)
    create_session_using_get_400_application_json_object: Optional[CreateSessionUsingGet400ApplicationJSON] = field(default=None)
    create_session_using_get_401_application_json_object: Optional[CreateSessionUsingGet401ApplicationJSON] = field(default=None)
    create_session_using_get_500_application_json_object: Optional[CreateSessionUsingGet500ApplicationJSON] = field(default=None)
    
