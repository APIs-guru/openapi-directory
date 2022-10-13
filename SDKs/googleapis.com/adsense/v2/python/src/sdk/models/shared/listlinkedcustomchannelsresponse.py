from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customchannel


@dataclass_json
@dataclass
class ListLinkedCustomChannelsResponse:
    custom_channels: Optional[List[customchannel.CustomChannel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customChannels' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
