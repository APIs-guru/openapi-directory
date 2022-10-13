from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetTagGroupsJSON200ApplicationJSONTagGroupsPermissions:
    staff: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'staff' }})
    

@dataclass_json
@dataclass
class GetTagGroupsJSON200ApplicationJSONTagGroups:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    one_per_topic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'one_per_topic' }})
    parent_tag_name: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_tag_name' }})
    permissions: Optional[GetTagGroupsJSON200ApplicationJSONTagGroupsPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    tag_names: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag_names' }})
    

@dataclass_json
@dataclass
class GetTagGroupsJSON200ApplicationJSON:
    tag_groups: Optional[List[GetTagGroupsJSON200ApplicationJSONTagGroups]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag_groups' }})
    

@dataclass
class GetTagGroupsJSONResponse:
    content_type: str = field(default=None)
    get_tag_groups_json_200_application_json_object: Optional[GetTagGroupsJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
