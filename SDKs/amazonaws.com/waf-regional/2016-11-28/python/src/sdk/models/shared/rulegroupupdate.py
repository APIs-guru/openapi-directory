from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import changeaction_enum
from . import activatedrule


@dataclass_json
@dataclass
class RuleGroupUpdate:
    action: changeaction_enum.ChangeActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    activated_rule: activatedrule.ActivatedRule = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivatedRule' }})
    
