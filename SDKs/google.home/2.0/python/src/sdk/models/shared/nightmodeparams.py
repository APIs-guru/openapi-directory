from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import window


@dataclass_json
@dataclass
class NightModeParams:
    device_override_do_not_disturb: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_override_do_not_disturb' }})
    do_not_disturb: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'do_not_disturb' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    led_brightness: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'led_brightness' }})
    volume: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'volume' }})
    windows: List[window.Window] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windows' }})
    
