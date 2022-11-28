from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PolicyAndroidDevicePolicyTracksEnum(str, Enum):
    APP_TRACK_UNSPECIFIED = "APP_TRACK_UNSPECIFIED"
    PRODUCTION = "PRODUCTION"
    BETA = "BETA"

class PolicyAppAutoUpdatePolicyEnum(str, Enum):
    APP_AUTO_UPDATE_POLICY_UNSPECIFIED = "APP_AUTO_UPDATE_POLICY_UNSPECIFIED"
    CHOICE_TO_THE_USER = "CHOICE_TO_THE_USER"
    NEVER = "NEVER"
    WIFI_ONLY = "WIFI_ONLY"
    ALWAYS = "ALWAYS"

class PolicyAutoDateAndTimeZoneEnum(str, Enum):
    AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED = "AUTO_DATE_AND_TIME_ZONE_UNSPECIFIED"
    AUTO_DATE_AND_TIME_ZONE_USER_CHOICE = "AUTO_DATE_AND_TIME_ZONE_USER_CHOICE"
    AUTO_DATE_AND_TIME_ZONE_ENFORCED = "AUTO_DATE_AND_TIME_ZONE_ENFORCED"

class PolicyCameraAccessEnum(str, Enum):
    CAMERA_ACCESS_UNSPECIFIED = "CAMERA_ACCESS_UNSPECIFIED"
    CAMERA_ACCESS_USER_CHOICE = "CAMERA_ACCESS_USER_CHOICE"
    CAMERA_ACCESS_DISABLED = "CAMERA_ACCESS_DISABLED"
    CAMERA_ACCESS_ENFORCED = "CAMERA_ACCESS_ENFORCED"

class PolicyDefaultPermissionPolicyEnum(str, Enum):
    PERMISSION_POLICY_UNSPECIFIED = "PERMISSION_POLICY_UNSPECIFIED"
    PROMPT = "PROMPT"
    GRANT = "GRANT"
    DENY = "DENY"

class PolicyEncryptionPolicyEnum(str, Enum):
    ENCRYPTION_POLICY_UNSPECIFIED = "ENCRYPTION_POLICY_UNSPECIFIED"
    ENABLED_WITHOUT_PASSWORD = "ENABLED_WITHOUT_PASSWORD"
    ENABLED_WITH_PASSWORD = "ENABLED_WITH_PASSWORD"

class PolicyKeyguardDisabledFeaturesEnum(str, Enum):
    KEYGUARD_DISABLED_FEATURE_UNSPECIFIED = "KEYGUARD_DISABLED_FEATURE_UNSPECIFIED"
    CAMERA = "CAMERA"
    NOTIFICATIONS = "NOTIFICATIONS"
    UNREDACTED_NOTIFICATIONS = "UNREDACTED_NOTIFICATIONS"
    TRUST_AGENTS = "TRUST_AGENTS"
    DISABLE_FINGERPRINT = "DISABLE_FINGERPRINT"
    DISABLE_REMOTE_INPUT = "DISABLE_REMOTE_INPUT"
    FACE = "FACE"
    IRIS = "IRIS"
    BIOMETRICS = "BIOMETRICS"
    ALL_FEATURES = "ALL_FEATURES"

class PolicyLocationModeEnum(str, Enum):
    LOCATION_MODE_UNSPECIFIED = "LOCATION_MODE_UNSPECIFIED"
    HIGH_ACCURACY = "HIGH_ACCURACY"
    SENSORS_ONLY = "SENSORS_ONLY"
    BATTERY_SAVING = "BATTERY_SAVING"
    OFF = "OFF"
    LOCATION_USER_CHOICE = "LOCATION_USER_CHOICE"
    LOCATION_ENFORCED = "LOCATION_ENFORCED"
    LOCATION_DISABLED = "LOCATION_DISABLED"

class PolicyMicrophoneAccessEnum(str, Enum):
    MICROPHONE_ACCESS_UNSPECIFIED = "MICROPHONE_ACCESS_UNSPECIFIED"
    MICROPHONE_ACCESS_USER_CHOICE = "MICROPHONE_ACCESS_USER_CHOICE"
    MICROPHONE_ACCESS_DISABLED = "MICROPHONE_ACCESS_DISABLED"
    MICROPHONE_ACCESS_ENFORCED = "MICROPHONE_ACCESS_ENFORCED"

class PolicyPlayStoreModeEnum(str, Enum):
    PLAY_STORE_MODE_UNSPECIFIED = "PLAY_STORE_MODE_UNSPECIFIED"
    WHITELIST = "WHITELIST"
    BLACKLIST = "BLACKLIST"

class PolicyPreferentialNetworkServiceEnum(str, Enum):
    PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED = "PREFERENTIAL_NETWORK_SERVICE_UNSPECIFIED"
    PREFERENTIAL_NETWORK_SERVICE_DISABLED = "PREFERENTIAL_NETWORK_SERVICE_DISABLED"
    PREFERENTIAL_NETWORK_SERVICE_ENABLED = "PREFERENTIAL_NETWORK_SERVICE_ENABLED"

class PolicyStayOnPluggedModesEnum(str, Enum):
    BATTERY_PLUGGED_MODE_UNSPECIFIED = "BATTERY_PLUGGED_MODE_UNSPECIFIED"
    AC = "AC"
    USB = "USB"
    WIRELESS = "WIRELESS"


@dataclass_json
@dataclass
class Policy:
    r"""Policy
    A policy resource represents a group of settings that govern the behavior of a managed device and the apps installed on it.
    """
    
    account_types_with_management_disabled: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountTypesWithManagementDisabled') }})
    add_user_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addUserDisabled') }})
    adjust_volume_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adjustVolumeDisabled') }})
    advanced_security_overrides: Optional[AdvancedSecurityOverrides] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advancedSecurityOverrides') }})
    always_on_vpn_package: Optional[AlwaysOnVpnPackage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alwaysOnVpnPackage') }})
    android_device_policy_tracks: Optional[List[PolicyAndroidDevicePolicyTracksEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidDevicePolicyTracks') }})
    app_auto_update_policy: Optional[PolicyAppAutoUpdatePolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appAutoUpdatePolicy') }})
    applications: Optional[List[ApplicationPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applications') }})
    auto_date_and_time_zone: Optional[PolicyAutoDateAndTimeZoneEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoDateAndTimeZone') }})
    auto_time_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoTimeRequired') }})
    block_applications_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockApplicationsEnabled') }})
    bluetooth_config_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bluetoothConfigDisabled') }})
    bluetooth_contact_sharing_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bluetoothContactSharingDisabled') }})
    bluetooth_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bluetoothDisabled') }})
    camera_access: Optional[PolicyCameraAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cameraAccess') }})
    camera_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cameraDisabled') }})
    cell_broadcasts_config_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellBroadcastsConfigDisabled') }})
    choose_private_key_rules: Optional[List[ChoosePrivateKeyRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choosePrivateKeyRules') }})
    compliance_rules: Optional[List[ComplianceRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceRules') }})
    create_windows_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createWindowsDisabled') }})
    credentials_config_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentialsConfigDisabled') }})
    cross_profile_policies: Optional[CrossProfilePolicies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crossProfilePolicies') }})
    data_roaming_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRoamingDisabled') }})
    debugging_features_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debuggingFeaturesAllowed') }})
    default_permission_policy: Optional[PolicyDefaultPermissionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPermissionPolicy') }})
    device_owner_lock_screen_info: Optional[UserFacingMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceOwnerLockScreenInfo') }})
    encryption_policy: Optional[PolicyEncryptionPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionPolicy') }})
    ensure_verify_apps_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ensureVerifyAppsEnabled') }})
    factory_reset_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('factoryResetDisabled') }})
    frp_admin_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frpAdminEmails') }})
    fun_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('funDisabled') }})
    install_apps_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installAppsDisabled') }})
    install_unknown_sources_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installUnknownSourcesAllowed') }})
    keyguard_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyguardDisabled') }})
    keyguard_disabled_features: Optional[List[PolicyKeyguardDisabledFeaturesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyguardDisabledFeatures') }})
    kiosk_custom_launcher_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kioskCustomLauncherEnabled') }})
    kiosk_customization: Optional[KioskCustomization] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kioskCustomization') }})
    location_mode: Optional[PolicyLocationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationMode') }})
    long_support_message: Optional[UserFacingMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longSupportMessage') }})
    maximum_time_to_lock: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumTimeToLock') }})
    microphone_access: Optional[PolicyMicrophoneAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('microphoneAccess') }})
    minimum_api_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumApiLevel') }})
    mobile_networks_config_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileNetworksConfigDisabled') }})
    modify_accounts_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifyAccountsDisabled') }})
    mount_physical_media_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mountPhysicalMediaDisabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_escape_hatch_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkEscapeHatchEnabled') }})
    network_reset_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkResetDisabled') }})
    onc_certificate_providers: Optional[List[OncCertificateProvider]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oncCertificateProviders') }})
    open_network_configuration: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openNetworkConfiguration') }})
    outgoing_beam_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoingBeamDisabled') }})
    outgoing_calls_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoingCallsDisabled') }})
    password_policies: Optional[List[PasswordRequirements]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordPolicies') }})
    password_requirements: Optional[PasswordRequirements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordRequirements') }})
    permission_grants: Optional[List[PermissionGrant]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionGrants') }})
    permitted_accessibility_services: Optional[PackageNameList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permittedAccessibilityServices') }})
    permitted_input_methods: Optional[PackageNameList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permittedInputMethods') }})
    persistent_preferred_activities: Optional[List[PersistentPreferredActivity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('persistentPreferredActivities') }})
    personal_usage_policies: Optional[PersonalUsagePolicies] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalUsagePolicies') }})
    play_store_mode: Optional[PolicyPlayStoreModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playStoreMode') }})
    policy_enforcement_rules: Optional[List[PolicyEnforcementRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyEnforcementRules') }})
    preferential_network_service: Optional[PolicyPreferentialNetworkServiceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferentialNetworkService') }})
    private_key_selection_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateKeySelectionEnabled') }})
    recommended_global_proxy: Optional[ProxyInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommendedGlobalProxy') }})
    remove_user_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeUserDisabled') }})
    safe_boot_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('safeBootDisabled') }})
    screen_capture_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenCaptureDisabled') }})
    set_user_icon_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setUserIconDisabled') }})
    set_wallpaper_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setWallpaperDisabled') }})
    setup_actions: Optional[List[SetupAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('setupActions') }})
    share_location_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareLocationDisabled') }})
    short_support_message: Optional[UserFacingMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortSupportMessage') }})
    skip_first_use_hints_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipFirstUseHintsEnabled') }})
    sms_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsDisabled') }})
    status_bar_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusBarDisabled') }})
    status_reporting_settings: Optional[StatusReportingSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusReportingSettings') }})
    stay_on_plugged_modes: Optional[List[PolicyStayOnPluggedModesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stayOnPluggedModes') }})
    system_update: Optional[SystemUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemUpdate') }})
    tethering_config_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tetheringConfigDisabled') }})
    uninstall_apps_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uninstallAppsDisabled') }})
    unmute_microphone_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unmuteMicrophoneDisabled') }})
    usage_log: Optional[UsageLog] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usageLog') }})
    usb_file_transfer_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usbFileTransferDisabled') }})
    usb_mass_storage_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usbMassStorageEnabled') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    vpn_config_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpnConfigDisabled') }})
    wifi_config_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiConfigDisabled') }})
    wifi_configs_lockdown_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiConfigsLockdownEnabled') }})
    
