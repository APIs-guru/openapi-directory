from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import patchrulegroup
from . import patchcompliancelevel_enum
from . import patchfiltergroup
from . import operatingsystem_enum
from . import patchaction_enum
from . import patchsource


@dataclass_json
@dataclass
class GetPatchBaselineResult:
    approval_rules: Optional[patchrulegroup.PatchRuleGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovalRules' }})
    approved_patches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovedPatches' }})
    approved_patches_compliance_level: Optional[patchcompliancelevel_enum.PatchComplianceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovedPatchesComplianceLevel' }})
    approved_patches_enable_non_security: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovedPatchesEnableNonSecurity' }})
    baseline_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaselineId' }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    global_filters: Optional[patchfiltergroup.PatchFilterGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalFilters' }})
    modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    operating_system: Optional[operatingsystem_enum.OperatingSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperatingSystem' }})
    patch_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatchGroups' }})
    rejected_patches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RejectedPatches' }})
    rejected_patches_action: Optional[patchaction_enum.PatchActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RejectedPatchesAction' }})
    sources: Optional[List[patchsource.PatchSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sources' }})
    
