from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribePatchGroupStateResult:
    instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Instances') }})
    instances_with_critical_non_compliant_patches: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancesWithCriticalNonCompliantPatches') }})
    instances_with_failed_patches: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancesWithFailedPatches') }})
    instances_with_installed_other_patches: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancesWithInstalledOtherPatches') }})
    instances_with_installed_patches: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancesWithInstalledPatches') }})
    instances_with_installed_pending_reboot_patches: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancesWithInstalledPendingRebootPatches') }})
    instances_with_installed_rejected_patches: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancesWithInstalledRejectedPatches') }})
    instances_with_missing_patches: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancesWithMissingPatches') }})
    instances_with_not_applicable_patches: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancesWithNotApplicablePatches') }})
    instances_with_other_non_compliant_patches: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancesWithOtherNonCompliantPatches') }})
    instances_with_security_non_compliant_patches: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancesWithSecurityNonCompliantPatches') }})
    instances_with_unreported_not_applicable_patches: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstancesWithUnreportedNotApplicablePatches') }})
    
