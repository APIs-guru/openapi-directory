from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListDataStreamsResponse:
    r"""GoogleAnalyticsAdminV1alphaListDataStreamsResponse
    Response message for ListDataStreams RPC.
    """
    
    data_streams: Optional[List[GoogleAnalyticsAdminV1alphaDataStream]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataStreams') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
