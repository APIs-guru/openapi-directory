from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateSafetyRuleResponse:
    assertion_rule: Optional[AssertionRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssertionRule') }})
    gating_rule: Optional[GatingRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GatingRule') }})
    
