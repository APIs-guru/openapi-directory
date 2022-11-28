from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstancePatchState:
    r"""InstancePatchState
    Defines the high-level patch compliance state for a managed instance, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the instance.
    """
    
    baseline_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('BaselineId') }})
    instance_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    operation: PatchOperationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operation') }})
    operation_end_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperationEndTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    operation_start_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OperationStartTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    patch_group: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PatchGroup') }})
    critical_non_compliant_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CriticalNonCompliantCount') }})
    failed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailedCount') }})
    install_override_list: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstallOverrideList') }})
    installed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstalledCount') }})
    installed_other_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstalledOtherCount') }})
    installed_pending_reboot_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstalledPendingRebootCount') }})
    installed_rejected_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstalledRejectedCount') }})
    last_no_reboot_install_operation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastNoRebootInstallOperationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    missing_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MissingCount') }})
    not_applicable_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotApplicableCount') }})
    other_non_compliant_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OtherNonCompliantCount') }})
    owner_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerInformation') }})
    reboot_option: Optional[RebootOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RebootOption') }})
    security_non_compliant_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityNonCompliantCount') }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotId') }})
    unreported_not_applicable_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnreportedNotApplicableCount') }})
    
