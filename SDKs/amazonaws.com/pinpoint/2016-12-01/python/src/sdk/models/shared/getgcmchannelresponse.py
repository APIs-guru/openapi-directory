from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import gcmchannelresponse


@dataclass_json
@dataclass
class GetGcmChannelResponse:
    gcm_channel_response: gcmchannelresponse.GcmChannelResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GCMChannelResponse' }})
    
