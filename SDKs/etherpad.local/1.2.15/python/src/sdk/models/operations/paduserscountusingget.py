from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PadUsersCountUsingGetQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class PadUsersCountUsingGet200ApplicationJSONData:
    pad_users_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('padUsersCount') }})
    

@dataclass_json
@dataclass
class PadUsersCountUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[PadUsersCountUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PadUsersCountUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PadUsersCountUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PadUsersCountUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PadUsersCountUsingGetRequest:
    query_params: PadUsersCountUsingGetQueryParams = field()
    

@dataclass
class PadUsersCountUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    pad_users_count_using_get_200_application_json_object: Optional[PadUsersCountUsingGet200ApplicationJSON] = field(default=None)
    pad_users_count_using_get_400_application_json_object: Optional[PadUsersCountUsingGet400ApplicationJSON] = field(default=None)
    pad_users_count_using_get_401_application_json_object: Optional[PadUsersCountUsingGet401ApplicationJSON] = field(default=None)
    pad_users_count_using_get_500_application_json_object: Optional[PadUsersCountUsingGet500ApplicationJSON] = field(default=None)
    
