from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import window


@dataclass_json
@dataclass
class NightModesettingsRequest:
    demo_to_user: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'demo_to_user' }})
    do_not_disturb: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'do_not_disturb' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    led_brightness: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'led_brightness' }})
    volume: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume' }})
    windows: List[window.Window] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windows' }})
    
