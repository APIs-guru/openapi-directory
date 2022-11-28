from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAdClientsResponse:
    r"""ListAdClientsResponse
    Response definition for the ad client list rpc.
    """
    
    ad_clients: Optional[List[AdClient]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adClients') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
