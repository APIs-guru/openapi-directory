from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Multizone:
    audio_output_delay: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_output_delay') }})
    audio_output_delay_hdmi: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_output_delay_hdmi') }})
    audio_output_delay_oem: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio_output_delay_oem') }})
    aux_in_group: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('aux_in_group') }})
    dynamic_groups: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamic_groups') }})
    groups: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    multichannel_status: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('multichannel_status') }})
    
