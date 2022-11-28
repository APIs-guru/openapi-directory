from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TagResponseColorEnum(str, Enum):
    DARK_PINK = "dark-pink"
    DARK_GREEN = "dark-green"
    DARK_BLUE = "dark-blue"
    DARK_RED = "dark-red"
    DARK_TEAL = "dark-teal"
    DARK_BROWN = "dark-brown"
    DARK_ORANGE = "dark-orange"
    DARK_PURPLE = "dark-purple"
    DARK_WARM_GRAY = "dark-warm-gray"
    LIGHT_PINK = "light-pink"
    LIGHT_GREEN = "light-green"
    LIGHT_BLUE = "light-blue"
    LIGHT_RED = "light-red"
    LIGHT_TEAL = "light-teal"
    LIGHT_BROWN = "light-brown"
    LIGHT_ORANGE = "light-orange"
    LIGHT_PURPLE = "light-purple"
    LIGHT_WARM_GRAY = "light-warm-gray"


@dataclass_json
@dataclass
class TagResponseInput:
    color: Optional[TagResponseColorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    workspace: Optional[WorkspaceCompactInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    

@dataclass_json
@dataclass
class TagResponse:
    color: Optional[TagResponseColorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    followers: Optional[List[UserCompact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followers') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gid') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    permalink_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permalink_url') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource_type') }})
    workspace: Optional[WorkspaceCompact] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workspace') }})
    
