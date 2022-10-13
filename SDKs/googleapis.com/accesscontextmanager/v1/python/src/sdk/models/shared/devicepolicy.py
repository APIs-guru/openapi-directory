from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import osconstraint

class DevicePolicyAllowedDeviceManagementLevelsEnum(str, Enum):
    MANAGEMENT_UNSPECIFIED = "MANAGEMENT_UNSPECIFIED"
    NONE = "NONE"
    BASIC = "BASIC"
    COMPLETE = "COMPLETE"

class DevicePolicyAllowedEncryptionStatusesEnum(str, Enum):
    ENCRYPTION_UNSPECIFIED = "ENCRYPTION_UNSPECIFIED"
    ENCRYPTION_UNSUPPORTED = "ENCRYPTION_UNSUPPORTED"
    UNENCRYPTED = "UNENCRYPTED"
    ENCRYPTED = "ENCRYPTED"


@dataclass_json
@dataclass
class DevicePolicy:
    allowed_device_management_levels: Optional[List[DevicePolicyAllowedDeviceManagementLevelsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedDeviceManagementLevels' }})
    allowed_encryption_statuses: Optional[List[DevicePolicyAllowedEncryptionStatusesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedEncryptionStatuses' }})
    os_constraints: Optional[List[osconstraint.OsConstraint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osConstraints' }})
    require_admin_approval: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requireAdminApproval' }})
    require_corp_owned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requireCorpOwned' }})
    require_screenlock: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requireScreenlock' }})
    
