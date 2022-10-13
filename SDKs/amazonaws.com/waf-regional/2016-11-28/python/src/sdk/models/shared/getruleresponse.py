from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rule


@dataclass_json
@dataclass
class GetRuleResponse:
    rule: Optional[rule.Rule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rule' }})
    
