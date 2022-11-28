from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSafetyRulesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    safety_rules: Optional[List[Rule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SafetyRules') }})
    
