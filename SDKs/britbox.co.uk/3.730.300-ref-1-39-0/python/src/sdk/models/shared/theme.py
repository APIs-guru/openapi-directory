from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ThemeTypeEnum(str, Enum):
    BACKGROUND = "Background"
    TEXT = "Text"
    CUSTOM = "Custom"


@dataclass_json
@dataclass
class Theme:
    colors: List[ThemeColor] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('colors') }})
    type: ThemeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
