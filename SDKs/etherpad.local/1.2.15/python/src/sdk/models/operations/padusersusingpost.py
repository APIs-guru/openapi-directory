from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PadUsersUsingPostQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class PadUsersUsingPost200ApplicationJSONDataPadUsers:
    color_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    

@dataclass_json
@dataclass
class PadUsersUsingPost200ApplicationJSONData:
    pad_users: Optional[List[PadUsersUsingPost200ApplicationJSONDataPadUsers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('padUsers') }})
    

@dataclass_json
@dataclass
class PadUsersUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[PadUsersUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PadUsersUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PadUsersUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PadUsersUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PadUsersUsingPostRequest:
    query_params: PadUsersUsingPostQueryParams = field()
    

@dataclass
class PadUsersUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    pad_users_using_post_200_application_json_object: Optional[PadUsersUsingPost200ApplicationJSON] = field(default=None)
    pad_users_using_post_400_application_json_object: Optional[PadUsersUsingPost400ApplicationJSON] = field(default=None)
    pad_users_using_post_401_application_json_object: Optional[PadUsersUsingPost401ApplicationJSON] = field(default=None)
    pad_users_using_post_500_application_json_object: Optional[PadUsersUsingPost500ApplicationJSON] = field(default=None)
    
