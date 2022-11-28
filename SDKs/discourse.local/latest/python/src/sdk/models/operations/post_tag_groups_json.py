from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostTagGroupsJSONRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PostTagGroupsJSON200ApplicationJSONTagGroup:
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    one_per_topic: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('one_per_topic') }})
    parent_tag_name: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_tag_name') }})
    permissions: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    tag_names: List[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag_names') }})
    

@dataclass_json
@dataclass
class PostTagGroupsJSON200ApplicationJSON:
    tag_group: PostTagGroupsJSON200ApplicationJSONTagGroup = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag_group') }})
    

@dataclass
class PostTagGroupsJSONRequest:
    request: Optional[PostTagGroupsJSONRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTagGroupsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    post_tag_groups_json_200_application_json_object: Optional[PostTagGroupsJSON200ApplicationJSON] = field(default=None)
    
