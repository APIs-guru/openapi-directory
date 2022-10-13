from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import channelsummary


@dataclass_json
@dataclass
class ListChannelsResponse:
    channels: List[channelsummary.ChannelSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
