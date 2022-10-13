from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import api_core_dto_tags_tag


@dataclass_json
@dataclass
class APICoreDtoGroupsGroup:
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPublic' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferred' }})
    redirect_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectOnly' }})
    tags: Optional[List[api_core_dto_tags_tag.APICoreDtoTagsTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    write_permited: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writePermited' }})
    
