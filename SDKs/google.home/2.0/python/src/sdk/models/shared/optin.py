from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OptIn:
    audio_hdr: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_hdr') }})
    audio_surround_mode: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_surround_mode') }})
    autoplay_on_signal: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoplay_on_signal') }})
    cloud_ipc: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloud_ipc') }})
    hdmi_prefer_50hz: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hdmi_prefer_50hz') }})
    hdmi_prefer_high_fps: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hdmi_prefer_high_fps') }})
    managed_mode: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('managed_mode') }})
    opencast: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('opencast') }})
    preview_channel: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_channel') }})
    remote_ducking: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('remote_ducking') }})
    stats: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stats') }})
    ui_flipped: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ui_flipped') }})
    wpa3_support_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('wpa3_support_enabled') }})
    
