from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetSessionInfoUsingGetQueryParams:
    session_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sessionID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetSessionInfoUsingGet200ApplicationJSONDataInfo:
    author_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorID') }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupID') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    valid_until: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validUntil') }})
    

@dataclass_json
@dataclass
class GetSessionInfoUsingGet200ApplicationJSONData:
    info: Optional[GetSessionInfoUsingGet200ApplicationJSONDataInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    

@dataclass_json
@dataclass
class GetSessionInfoUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[GetSessionInfoUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSessionInfoUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSessionInfoUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSessionInfoUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetSessionInfoUsingGetRequest:
    query_params: GetSessionInfoUsingGetQueryParams = field()
    

@dataclass
class GetSessionInfoUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    get_session_info_using_get_200_application_json_object: Optional[GetSessionInfoUsingGet200ApplicationJSON] = field(default=None)
    get_session_info_using_get_400_application_json_object: Optional[GetSessionInfoUsingGet400ApplicationJSON] = field(default=None)
    get_session_info_using_get_401_application_json_object: Optional[GetSessionInfoUsingGet401ApplicationJSON] = field(default=None)
    get_session_info_using_get_500_application_json_object: Optional[GetSessionInfoUsingGet500ApplicationJSON] = field(default=None)
    
