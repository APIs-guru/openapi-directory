from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserResponsePhoto:
    r"""UserResponsePhoto
    A map of the user’s profile photo in various sizes, or null if no photo is set. Sizes provided are 21, 27, 36, 60, 128, and 1024. All images are in PNG format, except for 1024 (which is in JPEG format).
    """
    
    image_1024x1024: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_1024x1024') }})
    image_128x128: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_128x128') }})
    image_21x21: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_21x21') }})
    image_27x27: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_27x27') }})
    image_36x36: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_36x36') }})
    image_60x60: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image_60x60') }})
    

@dataclass_json
@dataclass
class UserResponse:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    photo: Optional[UserResponsePhoto] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photo') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    workspaces: Optional[List[WorkspaceCompact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspaces') }})
    
