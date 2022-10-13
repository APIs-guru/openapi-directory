from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Settings:
    closed_caption: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_caption' }})
    control_notifications: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'control_notifications' }})
    country_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    locale: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locale' }})
    network_standby: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_standby' }})
    system_sound_effects: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'system_sound_effects' }})
    time_format: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_format' }})
    timezone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    wake_on_cast: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wake_on_cast' }})
    
