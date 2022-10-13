from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostTagGroupsJSONRequestBody:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass
class PostTagGroupsJSONRequest:
    request: Optional[PostTagGroupsJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostTagGroupsJSON200ApplicationJSONTagGroup:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    one_per_topic: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'one_per_topic' }})
    parent_tag_name: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_tag_name' }})
    permissions: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    tag_names: List[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag_names' }})
    

@dataclass_json
@dataclass
class PostTagGroupsJSON200ApplicationJSON:
    tag_group: PostTagGroupsJSON200ApplicationJSONTagGroup = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag_group' }})
    

@dataclass
class PostTagGroupsJSONResponse:
    content_type: str = field(default=None)
    post_tag_groups_json_200_application_json_object: Optional[PostTagGroupsJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
