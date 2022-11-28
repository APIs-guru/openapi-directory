from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeEffectivePatchesForPatchBaselineResult:
    effective_patches: Optional[List[EffectivePatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EffectivePatches') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
