from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metricdatapoint
from . import instancemetricname_enum


@dataclass_json
@dataclass
class GetInstanceMetricDataResult:
    metric_data: Optional[List[metricdatapoint.MetricDatapoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricData' }})
    metric_name: Optional[instancemetricname_enum.InstanceMetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    
