from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Rule:
    r"""Rule
    A safety rule. A safety rule can be an assertion rule or a gating rule.
    """
    
    assertion: Optional[AssertionRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ASSERTION') }})
    gating: Optional[GatingRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GATING') }})
    
