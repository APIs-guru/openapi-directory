from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import channelsresponse


@dataclass_json
@dataclass
class GetChannelsResponse:
    channels_response: channelsresponse.ChannelsResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelsResponse' }})
    
