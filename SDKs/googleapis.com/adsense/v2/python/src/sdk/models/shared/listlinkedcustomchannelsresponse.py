from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListLinkedCustomChannelsResponse:
    r"""ListLinkedCustomChannelsResponse
    Response definition for the custom channels linked to an adunit list rpc.
    """
    
    custom_channels: Optional[List[CustomChannel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customChannels') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
