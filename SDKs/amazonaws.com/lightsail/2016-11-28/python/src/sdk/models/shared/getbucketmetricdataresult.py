from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metricdatapoint
from . import bucketmetricname_enum


@dataclass_json
@dataclass
class GetBucketMetricDataResult:
    metric_data: Optional[List[metricdatapoint.MetricDatapoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricData' }})
    metric_name: Optional[bucketmetricname_enum.BucketMetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    
