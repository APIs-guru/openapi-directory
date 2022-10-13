from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1metricaggregation
from . import googletypeinterval

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
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    metrics: Optional[List[googlecloudapigeev1metricaggregation.GoogleCloudApigeeV1MetricAggregation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    time_range: Optional[googletypeinterval.GoogleTypeInterval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeRange' }})
    timestamp_order: Optional[GoogleCloudApigeeV1QueryTimeSeriesStatsRequestTimestampOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampOrder' }})
    window_size: Optional[GoogleCloudApigeeV1QueryTimeSeriesStatsRequestWindowSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windowSize' }})
    
