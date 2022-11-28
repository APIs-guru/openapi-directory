from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetAccessControlEffectResponse:
    effect: Optional[AccessControlRuleEffectEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Effect') }})
    matched_rules: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchedRules') }})
    
