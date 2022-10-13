from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metricdatapoint
from . import containerservicemetricname_enum


@dataclass_json
@dataclass
class GetContainerServiceMetricDataResult:
    metric_data: Optional[List[metricdatapoint.MetricDatapoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricData' }})
    metric_name: Optional[containerservicemetricname_enum.ContainerServiceMetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    
