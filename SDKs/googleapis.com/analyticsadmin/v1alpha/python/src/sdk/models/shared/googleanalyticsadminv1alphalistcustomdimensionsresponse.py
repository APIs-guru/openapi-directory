from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse:
    r"""GoogleAnalyticsAdminV1alphaListCustomDimensionsResponse
    Response message for ListCustomDimensions RPC.
    """
    
    custom_dimensions: Optional[List[GoogleAnalyticsAdminV1alphaCustomDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDimensions') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
