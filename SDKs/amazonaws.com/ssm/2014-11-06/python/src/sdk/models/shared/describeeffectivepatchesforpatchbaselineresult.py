from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import effectivepatch


@dataclass_json
@dataclass
class DescribeEffectivePatchesForPatchBaselineResult:
    effective_patches: Optional[List[effectivepatch.EffectivePatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EffectivePatches' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
