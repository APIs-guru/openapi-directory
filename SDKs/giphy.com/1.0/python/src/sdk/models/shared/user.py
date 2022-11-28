from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class User:
    r"""User
    The User Object contains information about the user associated with a GIF and URLs to assets such as that user's avatar image, profile, and more.
    """
    
    avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatar_url') }})
    banner_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('banner_url') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    profile_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile_url') }})
    twitter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twitter') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
