from dataclasses import dataclass, field
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
class BaselineOverride:
    approval_rules: Optional[patchrulegroup.PatchRuleGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovalRules' }})
    approved_patches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovedPatches' }})
    approved_patches_compliance_level: Optional[patchcompliancelevel_enum.PatchComplianceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovedPatchesComplianceLevel' }})
    approved_patches_enable_non_security: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovedPatchesEnableNonSecurity' }})
    global_filters: Optional[patchfiltergroup.PatchFilterGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalFilters' }})
    operating_system: Optional[operatingsystem_enum.OperatingSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperatingSystem' }})
    rejected_patches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RejectedPatches' }})
    rejected_patches_action: Optional[patchaction_enum.PatchActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RejectedPatchesAction' }})
    sources: Optional[List[patchsource.PatchSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sources' }})
    
