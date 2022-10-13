from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import patchbaselineidentity


@dataclass_json
@dataclass
class PatchGroupPatchBaselineMapping:
    baseline_identity: Optional[patchbaselineidentity.PatchBaselineIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaselineIdentity' }})
    patch_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatchGroup' }})
    
