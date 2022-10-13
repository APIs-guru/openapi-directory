from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PatchSummary:
    failed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedCount' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    installed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstalledCount' }})
    installed_other_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstalledOtherCount' }})
    installed_pending_reboot: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstalledPendingReboot' }})
    installed_rejected_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstalledRejectedCount' }})
    missing_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MissingCount' }})
    operation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operation' }})
    operation_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperationEndTime' }})
    operation_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperationStartTime' }})
    reboot_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RebootOption' }})
    
