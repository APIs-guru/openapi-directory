from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListClientConnectorServicesResponse:
    r"""ListClientConnectorServicesResponse
    Message for response to listing ClientConnectorServices.
    """
    
    client_connector_services: Optional[List[ClientConnectorService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientConnectorServices') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
