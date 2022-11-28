from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ListAllGroupsUsingGet200ApplicationJSONData:
    group_i_ds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupIDs') }})
    

@dataclass_json
@dataclass
class ListAllGroupsUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[ListAllGroupsUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ListAllGroupsUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ListAllGroupsUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class ListAllGroupsUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class ListAllGroupsUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    list_all_groups_using_get_200_application_json_object: Optional[ListAllGroupsUsingGet200ApplicationJSON] = field(default=None)
    list_all_groups_using_get_400_application_json_object: Optional[ListAllGroupsUsingGet400ApplicationJSON] = field(default=None)
    list_all_groups_using_get_401_application_json_object: Optional[ListAllGroupsUsingGet401ApplicationJSON] = field(default=None)
    list_all_groups_using_get_500_application_json_object: Optional[ListAllGroupsUsingGet500ApplicationJSON] = field(default=None)
    
