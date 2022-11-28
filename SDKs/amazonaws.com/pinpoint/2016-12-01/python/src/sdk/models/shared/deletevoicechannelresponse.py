from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteVoiceChannelResponse:
    voice_channel_response: VoiceChannelResponse = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VoiceChannelResponse') }})
    
