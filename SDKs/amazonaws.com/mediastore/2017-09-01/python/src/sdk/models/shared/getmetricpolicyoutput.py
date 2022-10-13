from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import metricpolicy


@dataclass_json
@dataclass
class GetMetricPolicyOutput:
    metric_policy: metricpolicy.MetricPolicy = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricPolicy' }})
    
