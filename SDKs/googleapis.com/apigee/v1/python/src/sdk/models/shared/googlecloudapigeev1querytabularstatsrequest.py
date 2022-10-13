from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1metricaggregation
from . import googletypeinterval


@dataclass_json
@dataclass
class GoogleCloudApigeeV1QueryTabularStatsRequest:
    dimensions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    metrics: Optional[List[googlecloudapigeev1metricaggregation.GoogleCloudApigeeV1MetricAggregation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    time_range: Optional[googletypeinterval.GoogleTypeInterval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeRange' }})
    
