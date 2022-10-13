from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workspacecompact


@dataclass_json
@dataclass
class UserResponsePhoto:
    image_1024x1024: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_1024x1024' }})
    image_128x128: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_128x128' }})
    image_21x21: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_21x21' }})
    image_27x27: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_27x27' }})
    image_36x36: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_36x36' }})
    image_60x60: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image_60x60' }})
    

@dataclass_json
@dataclass
class UserResponse:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    photo: Optional[UserResponsePhoto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photo' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    workspaces: Optional[List[workspacecompact.WorkspaceCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaces' }})
    
