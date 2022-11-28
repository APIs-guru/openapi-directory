from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Device
    A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch.
    """
    
    api_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiLevel') }})
    application_reports: Optional[List[ApplicationReport]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationReports') }})
    applied_password_policies: Optional[List[PasswordRequirements]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedPasswordPolicies') }})
    applied_policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedPolicyName') }})
    applied_policy_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedPolicyVersion') }})
    applied_state: Optional[DeviceAppliedStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedState') }})
    common_criteria_mode_info: Optional[CommonCriteriaModeInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commonCriteriaModeInfo') }})
    device_settings: Optional[DeviceSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSettings') }})
    disabled_reason: Optional[UserFacingMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledReason') }})
    displays: Optional[List[Display]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displays') }})
    enrollment_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrollmentTime') }})
    enrollment_token_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrollmentTokenData') }})
    enrollment_token_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrollmentTokenName') }})
    hardware_info: Optional[HardwareInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hardwareInfo') }})
    hardware_status_samples: Optional[List[HardwareStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hardwareStatusSamples') }})
    last_policy_compliance_report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastPolicyComplianceReportTime') }})
    last_policy_sync_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastPolicySyncTime') }})
    last_status_report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStatusReportTime') }})
    management_mode: Optional[DeviceManagementModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managementMode') }})
    memory_events: Optional[List[MemoryEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryEvents') }})
    memory_info: Optional[MemoryInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryInfo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_info: Optional[NetworkInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkInfo') }})
    non_compliance_details: Optional[List[NonComplianceDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonComplianceDetails') }})
    ownership: Optional[DeviceOwnershipEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownership') }})
    policy_compliant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyCompliant') }})
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyName') }})
    power_management_events: Optional[List[PowerManagementEvent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerManagementEvents') }})
    previous_device_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previousDeviceNames') }})
    security_posture: Optional[SecurityPosture] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityPosture') }})
    software_info: Optional[SoftwareInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareInfo') }})
    state: Optional[DeviceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    system_properties: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemProperties') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    
