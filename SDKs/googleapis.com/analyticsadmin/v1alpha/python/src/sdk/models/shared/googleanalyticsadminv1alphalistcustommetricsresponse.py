from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListCustomMetricsResponse:
    r"""GoogleAnalyticsAdminV1alphaListCustomMetricsResponse
    Response message for ListCustomMetrics RPC.
    """
    
    custom_metrics: Optional[List[GoogleAnalyticsAdminV1alphaCustomMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customMetrics') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
