from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metricdatapoint
from . import loadbalancermetricname_enum


@dataclass_json
@dataclass
class GetLoadBalancerMetricDataResult:
    metric_data: Optional[List[metricdatapoint.MetricDatapoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricData' }})
    metric_name: Optional[loadbalancermetricname_enum.LoadBalancerMetricNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    
