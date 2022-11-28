from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListURLChannelsResponse:
    r"""ListURLChannelsResponse
    Response definition for the url channels list rpc.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    url_channels: Optional[List[URLChannel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlChannels') }})
    
