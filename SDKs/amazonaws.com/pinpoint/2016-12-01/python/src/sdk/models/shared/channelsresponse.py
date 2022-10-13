from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import channelresponse


@dataclass_json
@dataclass
class ChannelsResponse:
    channels: dict[str, channelresponse.ChannelResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Channels' }})
    
