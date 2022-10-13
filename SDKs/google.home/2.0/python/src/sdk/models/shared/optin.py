from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OptIn:
    audio_hdr: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_hdr' }})
    audio_surround_mode: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_surround_mode' }})
    autoplay_on_signal: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoplay_on_signal' }})
    cloud_ipc: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloud_ipc' }})
    hdmi_prefer_50hz: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hdmi_prefer_50hz' }})
    hdmi_prefer_high_fps: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hdmi_prefer_high_fps' }})
    managed_mode: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managed_mode' }})
    opencast: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opencast' }})
    preview_channel: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preview_channel' }})
    remote_ducking: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remote_ducking' }})
    stats: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats' }})
    ui_flipped: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ui_flipped' }})
    wpa3_support_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wpa3_support_enabled' }})
    
