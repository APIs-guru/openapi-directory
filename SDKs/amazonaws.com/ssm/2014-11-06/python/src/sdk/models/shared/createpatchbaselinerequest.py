from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreatePatchBaselineRequest:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    approval_rules: Optional[PatchRuleGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovalRules') }})
    approved_patches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovedPatches') }})
    approved_patches_compliance_level: Optional[PatchComplianceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovedPatchesComplianceLevel') }})
    approved_patches_enable_non_security: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovedPatchesEnableNonSecurity') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    global_filters: Optional[PatchFilterGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalFilters') }})
    operating_system: Optional[OperatingSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperatingSystem') }})
    rejected_patches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RejectedPatches') }})
    rejected_patches_action: Optional[PatchActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RejectedPatchesAction') }})
    sources: Optional[List[PatchSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sources') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
