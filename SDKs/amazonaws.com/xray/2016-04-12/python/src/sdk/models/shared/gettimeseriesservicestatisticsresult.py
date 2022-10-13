from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timeseriesservicestatistics


@dataclass_json
@dataclass
class GetTimeSeriesServiceStatisticsResult:
    contains_old_group_versions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContainsOldGroupVersions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    time_series_service_statistics: Optional[List[timeseriesservicestatistics.TimeSeriesServiceStatistics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeSeriesServiceStatistics' }})
    
