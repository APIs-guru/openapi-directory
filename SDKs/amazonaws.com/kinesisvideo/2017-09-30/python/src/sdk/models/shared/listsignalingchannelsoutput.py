from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import channelinfo


@dataclass_json
@dataclass
class ListSignalingChannelsOutput:
    channel_info_list: Optional[List[channelinfo.ChannelInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelInfoList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
