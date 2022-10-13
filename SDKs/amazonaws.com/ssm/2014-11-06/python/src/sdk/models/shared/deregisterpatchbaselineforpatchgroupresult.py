from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeregisterPatchBaselineForPatchGroupResult:
    baseline_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaselineId' }})
    patch_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatchGroup' }})
    
