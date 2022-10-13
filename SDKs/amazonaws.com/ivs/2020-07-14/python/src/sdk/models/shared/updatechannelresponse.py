from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import channel


@dataclass_json
@dataclass
class UpdateChannelResponse:
    channel: Optional[channel.Channel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    
