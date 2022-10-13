from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import patchcompliancelevel_enum
from . import patchfiltergroup


@dataclass_json
@dataclass
class PatchRule:
    approve_after_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApproveAfterDays' }})
    approve_until_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApproveUntilDate' }})
    compliance_level: Optional[patchcompliancelevel_enum.PatchComplianceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceLevel' }})
    enable_non_security: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableNonSecurity' }})
    patch_filter_group: patchfiltergroup.PatchFilterGroup = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatchFilterGroup' }})
    
