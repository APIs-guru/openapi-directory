from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PatchGroupPatchBaselineMapping:
    r"""PatchGroupPatchBaselineMapping
    The mapping between a patch group and the patch baseline the patch group is registered with.
    """
    
    baseline_identity: Optional[PatchBaselineIdentity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaselineIdentity') }})
    patch_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatchGroup') }})
    
