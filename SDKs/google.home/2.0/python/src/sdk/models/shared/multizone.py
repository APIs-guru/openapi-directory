from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Multizone:
    audio_output_delay: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_output_delay' }})
    audio_output_delay_hdmi: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_output_delay_hdmi' }})
    audio_output_delay_oem: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_output_delay_oem' }})
    aux_in_group: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aux_in_group' }})
    dynamic_groups: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamic_groups' }})
    groups: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    multichannel_status: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multichannel_status' }})
    
