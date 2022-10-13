from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Capabilities:
    aogh_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aogh_supported' }})
    assistant_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assistant_supported' }})
    audio_hdr_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_hdr_supported' }})
    audio_surround_mode_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_surround_mode_supported' }})
    ble_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ble_supported' }})
    bluetooth_audio_sink_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bluetooth_audio_sink_supported' }})
    bluetooth_audio_source_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bluetooth_audio_source_supported' }})
    bluetooth_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bluetooth_supported' }})
    cloudcast_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudcast_supported' }})
    content_filters_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_filters_supported' }})
    display_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_supported' }})
    fdr_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fdr_supported' }})
    hdmi_prefer_50hz_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hdmi_prefer_50hz_supported' }})
    hdmi_prefer_high_fps_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hdmi_prefer_high_fps_supported' }})
    hotspot_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotspot_supported' }})
    https_setup_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'https_setup_supported' }})
    input_management_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input_management_supported' }})
    keep_hotspot_until_connected_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keep_hotspot_until_connected_supported' }})
    multi_user_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multi_user_supported' }})
    multichannel_group_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multichannel_group_supported' }})
    multizone_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multizone_supported' }})
    night_mode_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'night_mode_supported' }})
    night_mode_supported_v2: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'night_mode_supported_v2' }})
    opencast_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opencast_supported' }})
    preview_channel_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preview_channel_supported' }})
    reboot_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reboot_supported' }})
    remote_ducking_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remote_ducking_supported' }})
    separate_tts_volume_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'separate_tts_volume_supported' }})
    setup_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setup_supported' }})
    sleep_mode_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sleep_mode_supported' }})
    stats_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stats_supported' }})
    system_sound_effects_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'system_sound_effects_supported' }})
    user_eq_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_eq_supported' }})
    wifi_auto_save_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifi_auto_save_supported' }})
    wifi_regulatory_domain_locked: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifi_regulatory_domain_locked' }})
    wifi_supported: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wifi_supported' }})
    
