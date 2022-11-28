from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MetricsConfiguration:
    r"""MetricsConfiguration
    An object that specifies whether cloud metrics are collected in a deployment and, if so, what role is used to collect metrics.
    """
    
    cloud_metric_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudMetricEnabled') }})
    metric_rule_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricRuleRoleArn') }})
    
