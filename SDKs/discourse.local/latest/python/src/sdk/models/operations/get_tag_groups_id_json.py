from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetTagGroupsIDJSONPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagGroupsIDJSONRequest:
    path_params: GetTagGroupsIDJSONPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetTagGroupsIDJSON200ApplicationJSONTagGroupPermissions:
    everyone: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'everyone' }})
    

@dataclass_json
@dataclass
class GetTagGroupsIDJSON200ApplicationJSONTagGroup:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    one_per_topic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'one_per_topic' }})
    parent_tag_name: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_tag_name' }})
    permissions: Optional[GetTagGroupsIDJSON200ApplicationJSONTagGroupPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    tag_names: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag_names' }})
    

@dataclass_json
@dataclass
class GetTagGroupsIDJSON200ApplicationJSON:
    tag_group: Optional[GetTagGroupsIDJSON200ApplicationJSONTagGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag_group' }})
    

@dataclass
class GetTagGroupsIDJSONResponse:
    content_type: str = field(default=None)
    get_tag_groups_id_json_200_application_json_object: Optional[GetTagGroupsIDJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
