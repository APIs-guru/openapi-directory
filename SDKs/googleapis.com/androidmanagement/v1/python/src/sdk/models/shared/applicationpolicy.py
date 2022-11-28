from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum(str, Enum):
    ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED = "ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED"
    VPN_LOCKDOWN_ENFORCED = "VPN_LOCKDOWN_ENFORCED"
    VPN_LOCKDOWN_EXEMPTION = "VPN_LOCKDOWN_EXEMPTION"

class ApplicationPolicyAutoUpdateModeEnum(str, Enum):
    AUTO_UPDATE_MODE_UNSPECIFIED = "AUTO_UPDATE_MODE_UNSPECIFIED"
    AUTO_UPDATE_DEFAULT = "AUTO_UPDATE_DEFAULT"
    AUTO_UPDATE_POSTPONED = "AUTO_UPDATE_POSTPONED"
    AUTO_UPDATE_HIGH_PRIORITY = "AUTO_UPDATE_HIGH_PRIORITY"

class ApplicationPolicyConnectedWorkAndPersonalAppEnum(str, Enum):
    CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED = "CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED"
    CONNECTED_WORK_AND_PERSONAL_APP_DISALLOWED = "CONNECTED_WORK_AND_PERSONAL_APP_DISALLOWED"
    CONNECTED_WORK_AND_PERSONAL_APP_ALLOWED = "CONNECTED_WORK_AND_PERSONAL_APP_ALLOWED"

class ApplicationPolicyDefaultPermissionPolicyEnum(str, Enum):
    PERMISSION_POLICY_UNSPECIFIED = "PERMISSION_POLICY_UNSPECIFIED"
    PROMPT = "PROMPT"
    GRANT = "GRANT"
    DENY = "DENY"

class ApplicationPolicyDelegatedScopesEnum(str, Enum):
    DELEGATED_SCOPE_UNSPECIFIED = "DELEGATED_SCOPE_UNSPECIFIED"
    CERT_INSTALL = "CERT_INSTALL"
    MANAGED_CONFIGURATIONS = "MANAGED_CONFIGURATIONS"
    BLOCK_UNINSTALL = "BLOCK_UNINSTALL"
    PERMISSION_GRANT = "PERMISSION_GRANT"
    PACKAGE_ACCESS = "PACKAGE_ACCESS"
    ENABLE_SYSTEM_APP = "ENABLE_SYSTEM_APP"
    NETWORK_ACTIVITY_LOGS = "NETWORK_ACTIVITY_LOGS"
    SECURITY_LOGS = "SECURITY_LOGS"

class ApplicationPolicyInstallTypeEnum(str, Enum):
    INSTALL_TYPE_UNSPECIFIED = "INSTALL_TYPE_UNSPECIFIED"
    PREINSTALLED = "PREINSTALLED"
    FORCE_INSTALLED = "FORCE_INSTALLED"
    BLOCKED = "BLOCKED"
    AVAILABLE = "AVAILABLE"
    REQUIRED_FOR_SETUP = "REQUIRED_FOR_SETUP"
    KIOSK = "KIOSK"


@dataclass_json
@dataclass
class ApplicationPolicy:
    r"""ApplicationPolicy
    Policy for an individual app.
    """
    
    accessible_track_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessibleTrackIds') }})
    always_on_vpn_lockdown_exemption: Optional[ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alwaysOnVpnLockdownExemption') }})
    auto_update_mode: Optional[ApplicationPolicyAutoUpdateModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoUpdateMode') }})
    connected_work_and_personal_app: Optional[ApplicationPolicyConnectedWorkAndPersonalAppEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectedWorkAndPersonalApp') }})
    default_permission_policy: Optional[ApplicationPolicyDefaultPermissionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPermissionPolicy') }})
    delegated_scopes: Optional[List[ApplicationPolicyDelegatedScopesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegatedScopes') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    extension_config: Optional[ExtensionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extensionConfig') }})
    install_type: Optional[ApplicationPolicyInstallTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installType') }})
    lock_task_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lockTaskAllowed') }})
    managed_configuration: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedConfiguration') }})
    managed_configuration_template: Optional[ManagedConfigurationTemplate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedConfigurationTemplate') }})
    minimum_version_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumVersionCode') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    permission_grants: Optional[List[PermissionGrant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionGrants') }})
    
