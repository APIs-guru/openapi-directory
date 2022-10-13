from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SubscribedRuleGroupSummary:
    metric_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    rule_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupId' }})
    
