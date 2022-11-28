from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeregisterPatchBaselineForPatchGroupRequest:
    baseline_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaselineId') }})
    patch_group: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatchGroup') }})
    
