from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListConnectionsResponse:
    r"""ListConnectionsResponse
    The response for ConnectionService.ListConnections.
    """
    
    connections: Optional[List[Connection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
