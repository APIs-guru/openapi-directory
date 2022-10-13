from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import applicationreport
from . import passwordrequirements
from . import commoncriteriamodeinfo
from . import devicesettings
from . import userfacingmessage
from . import display
from . import hardwareinfo
from . import hardwarestatus
from . import memoryevent
from . import memoryinfo
from . import networkinfo
from . import noncompliancedetail
from . import powermanagementevent
from . import securityposture
from . import softwareinfo
from . import user

class DeviceAppliedStateEnum(str, Enum):
    DEVICE_STATE_UNSPECIFIED = "DEVICE_STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DISABLED = "DISABLED"
    DELETED = "DELETED"
    PROVISIONING = "PROVISIONING"

class DeviceManagementModeEnum(str, Enum):
    MANAGEMENT_MODE_UNSPECIFIED = "MANAGEMENT_MODE_UNSPECIFIED"
    DEVICE_OWNER = "DEVICE_OWNER"
    PROFILE_OWNER = "PROFILE_OWNER"

class DeviceOwnershipEnum(str, Enum):
    OWNERSHIP_UNSPECIFIED = "OWNERSHIP_UNSPECIFIED"
    COMPANY_OWNED = "COMPANY_OWNED"
    PERSONALLY_OWNED = "PERSONALLY_OWNED"

class DeviceStateEnum(str, Enum):
    DEVICE_STATE_UNSPECIFIED = "DEVICE_STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DISABLED = "DISABLED"
    DELETED = "DELETED"
    PROVISIONING = "PROVISIONING"


@dataclass_json
@dataclass
class Device:
    api_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiLevel' }})
    application_reports: Optional[List[applicationreport.ApplicationReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationReports' }})
    applied_password_policies: Optional[List[passwordrequirements.PasswordRequirements]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedPasswordPolicies' }})
    applied_policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedPolicyName' }})
    applied_policy_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedPolicyVersion' }})
    applied_state: Optional[DeviceAppliedStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appliedState' }})
    common_criteria_mode_info: Optional[commoncriteriamodeinfo.CommonCriteriaModeInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commonCriteriaModeInfo' }})
    device_settings: Optional[devicesettings.DeviceSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceSettings' }})
    disabled_reason: Optional[userfacingmessage.UserFacingMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabledReason' }})
    displays: Optional[List[display.Display]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displays' }})
    enrollment_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enrollmentTime' }})
    enrollment_token_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enrollmentTokenData' }})
    enrollment_token_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enrollmentTokenName' }})
    hardware_info: Optional[hardwareinfo.HardwareInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hardwareInfo' }})
    hardware_status_samples: Optional[List[hardwarestatus.HardwareStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hardwareStatusSamples' }})
    last_policy_compliance_report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastPolicyComplianceReportTime' }})
    last_policy_sync_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastPolicySyncTime' }})
    last_status_report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastStatusReportTime' }})
    management_mode: Optional[DeviceManagementModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managementMode' }})
    memory_events: Optional[List[memoryevent.MemoryEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryEvents' }})
    memory_info: Optional[memoryinfo.MemoryInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryInfo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_info: Optional[networkinfo.NetworkInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkInfo' }})
    non_compliance_details: Optional[List[noncompliancedetail.NonComplianceDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nonComplianceDetails' }})
    ownership: Optional[DeviceOwnershipEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownership' }})
    policy_compliant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyCompliant' }})
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyName' }})
    power_management_events: Optional[List[powermanagementevent.PowerManagementEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'powerManagementEvents' }})
    previous_device_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previousDeviceNames' }})
    security_posture: Optional[securityposture.SecurityPosture] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityPosture' }})
    software_info: Optional[softwareinfo.SoftwareInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'softwareInfo' }})
    state: Optional[DeviceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    system_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'systemProperties' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    
