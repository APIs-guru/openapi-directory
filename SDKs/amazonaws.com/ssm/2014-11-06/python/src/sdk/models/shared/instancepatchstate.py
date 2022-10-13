from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import patchoperationtype_enum
from . import rebootoption_enum


@dataclass_json
@dataclass
class InstancePatchState:
    baseline_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BaselineId' }})
    critical_non_compliant_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CriticalNonCompliantCount' }})
    failed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailedCount' }})
    install_override_list: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstallOverrideList' }})
    installed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstalledCount' }})
    installed_other_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstalledOtherCount' }})
    installed_pending_reboot_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstalledPendingRebootCount' }})
    installed_rejected_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstalledRejectedCount' }})
    instance_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    last_no_reboot_install_operation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastNoRebootInstallOperationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    missing_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MissingCount' }})
    not_applicable_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NotApplicableCount' }})
    operation: patchoperationtype_enum.PatchOperationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operation' }})
    operation_end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperationEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    operation_start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperationStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    other_non_compliant_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OtherNonCompliantCount' }})
    owner_information: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerInformation' }})
    patch_group: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PatchGroup' }})
    reboot_option: Optional[rebootoption_enum.RebootOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RebootOption' }})
    security_non_compliant_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityNonCompliantCount' }})
    snapshot_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotId' }})
    unreported_not_applicable_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnreportedNotApplicableCount' }})
    
