from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse:
    r"""GoogleCloudBeyondcorpAppconnectionsV1alphaListAppConnectionsResponse
    Response message for BeyondCorp.ListAppConnections.
    """
    
    app_connections: Optional[List[GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appConnections') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
