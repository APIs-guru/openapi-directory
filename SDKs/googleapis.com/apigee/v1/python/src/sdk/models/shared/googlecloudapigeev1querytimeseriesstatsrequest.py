from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnum(str, Enum):
    ORDER_UNSPECIFIED = "ORDER_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

class GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum(str, Enum):
    WINDOW_SIZE_UNSPECIFIED = "WINDOW_SIZE_UNSPECIFIED"
    MINUTE = "MINUTE"
    HOUR = "HOUR"
    DAY = "DAY"
    MONTH = "MONTH"


@dataclass_json
@dataclass
class GoogleCloudApigeeV1QueryTimeSeriesStatsRequest:
    r"""GoogleCloudApigeeV1QueryTimeSeriesStatsRequest
    QueryTimeSeriesStatsRequest represents a query that returns a collection of time series sequences grouped by their values.
    """
    
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filter') }})
    metrics: Optional[List[GoogleCloudApigeeV1MetricAggregation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    time_range: Optional[GoogleTypeInterval] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    timestamp_order: Optional[GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampOrder') }})
    window_size: Optional[GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowSize') }})
    
