from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Settings:
    closed_caption: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_caption') }})
    control_notifications: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('control_notifications') }})
    country_code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    locale: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    network_standby: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_standby') }})
    system_sound_effects: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('system_sound_effects') }})
    time_format: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_format') }})
    timezone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    wake_on_cast: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wake_on_cast') }})
    
