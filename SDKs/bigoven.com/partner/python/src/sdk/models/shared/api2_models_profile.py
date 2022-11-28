from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Api2ModelsProfile:
    about_me: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AboutMe') }, 'form': { 'field_name': 'AboutMe' }})
    background_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BackgroundUrl') }, 'form': { 'field_name': 'BackgroundUrl' }})
    counts: Optional[Api2ModelsCounts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Counts') }, 'form': { 'field_name': 'Counts' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstName') }, 'form': { 'field_name': 'FirstName' }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FullName') }, 'form': { 'field_name': 'FullName' }})
    home_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HomeUrl') }, 'form': { 'field_name': 'HomeUrl' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastName') }, 'form': { 'field_name': 'LastName' }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhotoUrl') }, 'form': { 'field_name': 'PhotoUrl' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserID') }, 'form': { 'field_name': 'UserID' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }, 'form': { 'field_name': 'UserName' }})
    
