from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import channel
from . import streamkey


@dataclass_json
@dataclass
class CreateChannelResponse:
    channel: Optional[channel.Channel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    stream_key: Optional[streamkey.StreamKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamKey' }})
    
