from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListPropertiesResponse:
    r"""GoogleAnalyticsAdminV1alphaListPropertiesResponse
    Response message for ListProperties RPC.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    properties: Optional[List[GoogleAnalyticsAdminV1alphaProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    
