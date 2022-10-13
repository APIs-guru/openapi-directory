from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import voicechannelresponse


@dataclass_json
@dataclass
class UpdateVoiceChannelResponse:
    voice_channel_response: voicechannelresponse.VoiceChannelResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoiceChannelResponse' }})
    
