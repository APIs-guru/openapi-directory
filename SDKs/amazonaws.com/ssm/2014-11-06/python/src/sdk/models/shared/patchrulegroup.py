from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PatchRuleGroup:
    r"""PatchRuleGroup
    A set of rules defining the approval rules for a patch baseline.
    """
    
    patch_rules: List[PatchRule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatchRules') }})
    
