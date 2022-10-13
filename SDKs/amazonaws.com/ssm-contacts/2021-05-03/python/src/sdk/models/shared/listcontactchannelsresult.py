from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contactchannel


@dataclass_json
@dataclass
class ListContactChannelsResult:
    contact_channels: List[contactchannel.ContactChannel] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactChannels' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
