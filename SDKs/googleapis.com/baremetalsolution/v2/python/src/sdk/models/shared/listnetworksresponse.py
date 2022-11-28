from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListNetworksResponse:
    r"""ListNetworksResponse
    Response message containing the list of networks.
    """
    
    networks: Optional[List[Network]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
