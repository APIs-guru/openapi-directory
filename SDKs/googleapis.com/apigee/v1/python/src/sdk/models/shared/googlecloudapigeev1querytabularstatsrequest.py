from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudApigeeV1QueryTabularStatsRequest:
    r"""GoogleCloudApigeeV1QueryTabularStatsRequest
    Request payload representing the query to be run for fetching security statistics as rows.
    """
    
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    metrics: Optional[List[GoogleCloudApigeeV1MetricAggregation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    time_range: Optional[GoogleTypeInterval] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    
