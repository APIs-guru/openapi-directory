from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import apnschannelresponse


@dataclass_json
@dataclass
class GetApnsChannelResponse:
    apns_channel_response: apnschannelresponse.ApnsChannelResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'APNSChannelResponse' }})
    
