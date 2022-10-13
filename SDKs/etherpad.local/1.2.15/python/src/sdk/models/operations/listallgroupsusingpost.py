from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListAllGroupsUsingPost200ApplicationJSONData:
    group_i_ds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupIDs' }})
    

@dataclass_json
@dataclass
class ListAllGroupsUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[ListAllGroupsUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListAllGroupsUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListAllGroupsUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListAllGroupsUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ListAllGroupsUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_all_groups_using_post_200_application_json_object: Optional[ListAllGroupsUsingPost200ApplicationJSON] = field(default=None)
    list_all_groups_using_post_400_application_json_object: Optional[ListAllGroupsUsingPost400ApplicationJSON] = field(default=None)
    list_all_groups_using_post_401_application_json_object: Optional[ListAllGroupsUsingPost401ApplicationJSON] = field(default=None)
    list_all_groups_using_post_500_application_json_object: Optional[ListAllGroupsUsingPost500ApplicationJSON] = field(default=None)
    
