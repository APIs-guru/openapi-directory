from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import channelinfo


@dataclass_json
@dataclass
class DescribeSignalingChannelOutput:
    channel_info: Optional[channelinfo.ChannelInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelInfo' }})
    
