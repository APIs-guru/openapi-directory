from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetricsConfiguration:
    cloud_metric_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudMetricEnabled' }})
    metric_rule_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricRuleRoleArn' }})
    
