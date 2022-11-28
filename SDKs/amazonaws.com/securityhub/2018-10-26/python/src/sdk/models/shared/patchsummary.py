from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PatchSummary:
    r"""PatchSummary
    Provides an overview of the patch compliance status for an instance against a selected compliance standard.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    failed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedCount') }})
    installed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstalledCount') }})
    installed_other_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstalledOtherCount') }})
    installed_pending_reboot: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstalledPendingReboot') }})
    installed_rejected_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstalledRejectedCount') }})
    missing_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MissingCount') }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operation') }})
    operation_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperationEndTime') }})
    operation_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperationStartTime') }})
    reboot_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RebootOption') }})
    
