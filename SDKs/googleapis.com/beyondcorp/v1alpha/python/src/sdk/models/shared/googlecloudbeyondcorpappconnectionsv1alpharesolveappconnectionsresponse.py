from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse:
    r"""GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse
    Response message for BeyondCorp.ResolveAppConnections.
    """
    
    app_connection_details: Optional[List[GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponseAppConnectionDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appConnectionDetails') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
