from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EffectivePatch:
    r"""EffectivePatch
    The <code>EffectivePatch</code> structure defines metadata about a patch along with the approval state of the patch in a particular patch baseline. The approval state includes information about whether the patch is currently approved, due to be approved by a rule, explicitly approved, or explicitly rejected and the date the patch was or will be approved.
    """
    
    patch: Optional[Patch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Patch') }})
    patch_status: Optional[PatchStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatchStatus') }})
    
