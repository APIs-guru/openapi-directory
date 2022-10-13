from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import apnsvoipchannelresponse


@dataclass_json
@dataclass
class GetApnsVoipChannelResponse:
    apns_voip_channel_response: apnsvoipchannelresponse.ApnsVoipChannelResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'APNSVoipChannelResponse' }})
    
