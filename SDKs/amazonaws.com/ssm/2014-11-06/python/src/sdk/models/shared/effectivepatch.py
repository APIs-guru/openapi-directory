from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import patch
from . import patchstatus


@dataclass_json
@dataclass
class EffectivePatch:
    patch: Optional[patch.Patch] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Patch' }})
    patch_status: Optional[patchstatus.PatchStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatchStatus' }})
    
