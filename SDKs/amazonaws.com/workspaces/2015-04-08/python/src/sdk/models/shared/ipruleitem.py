from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IPRuleItem:
    ip_rule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipRule' }})
    rule_desc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleDesc' }})
    
