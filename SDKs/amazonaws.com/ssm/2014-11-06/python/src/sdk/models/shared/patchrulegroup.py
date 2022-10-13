from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import patchrule


@dataclass_json
@dataclass
class PatchRuleGroup:
    patch_rules: List[patchrule.PatchRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatchRules' }})
    
