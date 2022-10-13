from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import patchrulegroup
from . import patchcompliancelevel_enum
from . import patchfiltergroup
from . import operatingsystem_enum
from . import patchaction_enum
from . import patchsource
from . import tag


@dataclass_json
@dataclass
class CreatePatchBaselineRequest:
    approval_rules: Optional[patchrulegroup.PatchRuleGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovalRules' }})
    approved_patches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovedPatches' }})
    approved_patches_compliance_level: Optional[patchcompliancelevel_enum.PatchComplianceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovedPatchesComplianceLevel' }})
    approved_patches_enable_non_security: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovedPatchesEnableNonSecurity' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    global_filters: Optional[patchfiltergroup.PatchFilterGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalFilters' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    operating_system: Optional[operatingsystem_enum.OperatingSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperatingSystem' }})
    rejected_patches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RejectedPatches' }})
    rejected_patches_action: Optional[patchaction_enum.PatchActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RejectedPatchesAction' }})
    sources: Optional[List[patchsource.PatchSource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sources' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
