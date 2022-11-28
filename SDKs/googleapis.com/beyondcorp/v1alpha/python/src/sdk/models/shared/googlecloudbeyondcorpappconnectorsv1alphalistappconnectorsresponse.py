from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse:
    r"""GoogleCloudBeyondcorpAppconnectorsV1alphaListAppConnectorsResponse
    Response message for BeyondCorp.ListAppConnectors.
    """
    
    app_connectors: Optional[List[GoogleCloudBeyondcorpAppconnectorsV1alphaAppConnector]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appConnectors') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
