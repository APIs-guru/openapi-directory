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
class UpdatePatchBaselineResult:
    approval_rules: Optional[PatchRuleGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovalRules') }})
    approved_patches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovedPatches') }})
    approved_patches_compliance_level: Optional[PatchComplianceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovedPatchesComplianceLevel') }})
    approved_patches_enable_non_security: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApprovedPatchesEnableNonSecurity') }})
    baseline_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaselineId') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    global_filters: Optional[PatchFilterGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalFilters') }})
    modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    operating_system: Optional[OperatingSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperatingSystem') }})
    rejected_patches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RejectedPatches') }})
    rejected_patches_action: Optional[PatchActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RejectedPatchesAction') }})
    sources: Optional[List[PatchSource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sources') }})
    
