from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RuleSummary:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    rule_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleId' }})
    
