from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListImpressionMetricsResponse:
    r"""ListImpressionMetricsResponse
    Response message for listing the metrics that are measured in number of impressions.
    """
    
    impression_metrics_rows: Optional[List[ImpressionMetricsRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impressionMetricsRows') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
