from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PutTagGroupsIDJSONPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutTagGroupsIDJSONRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class PutTagGroupsIDJSONRequest:
    path_params: PutTagGroupsIDJSONPathParams = field(default=None)
    request: Optional[PutTagGroupsIDJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PutTagGroupsIDJSON200ApplicationJSONTagGroupPermissions:
    everyone: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'everyone' }})
    

@dataclass_json
@dataclass
class PutTagGroupsIDJSON200ApplicationJSONTagGroup:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    one_per_topic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'one_per_topic' }})
    parent_tag_name: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_tag_name' }})
    permissions: Optional[PutTagGroupsIDJSON200ApplicationJSONTagGroupPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    tag_names: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag_names' }})
    

@dataclass_json
@dataclass
class PutTagGroupsIDJSON200ApplicationJSON:
    success: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    tag_group: Optional[PutTagGroupsIDJSON200ApplicationJSONTagGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag_group' }})
    

@dataclass
class PutTagGroupsIDJSONResponse:
    content_type: str = field(default=None)
    put_tag_groups_id_json_200_application_json_object: Optional[PutTagGroupsIDJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
