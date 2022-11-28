from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdatePatchBaselineRequest:
    baseline_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaselineId') }})
    approval_rules: Optional[PatchRuleGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovalRules') }})
    approved_patches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovedPatches') }})
    approved_patches_compliance_level: Optional[PatchComplianceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovedPatchesComplianceLevel') }})
    approved_patches_enable_non_security: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovedPatchesEnableNonSecurity') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    global_filters: Optional[PatchFilterGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalFilters') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    rejected_patches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RejectedPatches') }})
    rejected_patches_action: Optional[PatchActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RejectedPatchesAction') }})
    replace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Replace') }})
    sources: Optional[List[PatchSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sources') }})
    
