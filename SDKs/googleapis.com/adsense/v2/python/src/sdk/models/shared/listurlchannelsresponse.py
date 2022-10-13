from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import urlchannel


@dataclass_json
@dataclass
class ListURLChannelsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    url_channels: Optional[List[urlchannel.URLChannel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlChannels' }})
    
