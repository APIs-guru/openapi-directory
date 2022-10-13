from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import channel
from . import batcherror


@dataclass_json
@dataclass
class BatchGetChannelResponse:
    channels: Optional[List[channel.Channel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    errors: Optional[List[batcherror.BatchError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
