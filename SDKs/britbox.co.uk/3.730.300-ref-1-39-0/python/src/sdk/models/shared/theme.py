from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import themecolor

class ThemeTypeEnum(str, Enum):
    BACKGROUND = "Background"
    TEXT = "Text"
    CUSTOM = "Custom"


@dataclass_json
@dataclass
class Theme:
    colors: List[themecolor.ThemeColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colors' }})
    type: ThemeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
