from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import photo


@dataclass_json
@dataclass
class User:
    is_deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDeleted' }})
    is_me: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isMe' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    permission_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionId' }})
    photo: Optional[photo.Photo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photo' }})
    
