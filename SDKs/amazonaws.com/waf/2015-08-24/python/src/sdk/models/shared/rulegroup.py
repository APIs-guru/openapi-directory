from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RuleGroup:
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    rule_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupId' }})
    
