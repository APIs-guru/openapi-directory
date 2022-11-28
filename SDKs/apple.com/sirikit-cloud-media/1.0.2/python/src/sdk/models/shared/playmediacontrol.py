from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlayMediaControl:
    scheme: PlayMediaControlSchemeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheme') }})
    activity: Optional[PlayMediaControlActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    commands: Optional[PlayMediaControlCommandSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commands') }})
    
