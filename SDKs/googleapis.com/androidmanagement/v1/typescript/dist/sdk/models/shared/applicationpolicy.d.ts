import { SpeakeasyBase } from "../../../internal/utils";
import { ExtensionConfig } from "./extensionconfig";
import { ManagedConfigurationTemplate } from "./managedconfigurationtemplate";
import { PermissionGrant } from "./permissiongrant";
export declare enum ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum {
    AlwaysOnVpnLockdownExemptionUnspecified = "ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED",
    VpnLockdownEnforced = "VPN_LOCKDOWN_ENFORCED",
    VpnLockdownExemption = "VPN_LOCKDOWN_EXEMPTION"
}
export declare enum ApplicationPolicyAutoUpdateModeEnum {
    AutoUpdateModeUnspecified = "AUTO_UPDATE_MODE_UNSPECIFIED",
    AutoUpdateDefault = "AUTO_UPDATE_DEFAULT",
    AutoUpdatePostponed = "AUTO_UPDATE_POSTPONED",
    AutoUpdateHighPriority = "AUTO_UPDATE_HIGH_PRIORITY"
}
export declare enum ApplicationPolicyConnectedWorkAndPersonalAppEnum {
    ConnectedWorkAndPersonalAppUnspecified = "CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED",
    ConnectedWorkAndPersonalAppDisallowed = "CONNECTED_WORK_AND_PERSONAL_APP_DISALLOWED",
    ConnectedWorkAndPersonalAppAllowed = "CONNECTED_WORK_AND_PERSONAL_APP_ALLOWED"
}
export declare enum ApplicationPolicyDefaultPermissionPolicyEnum {
    PermissionPolicyUnspecified = "PERMISSION_POLICY_UNSPECIFIED",
    Prompt = "PROMPT",
    Grant = "GRANT",
    Deny = "DENY"
}
export declare enum ApplicationPolicyDelegatedScopesEnum {
    DelegatedScopeUnspecified = "DELEGATED_SCOPE_UNSPECIFIED",
    CertInstall = "CERT_INSTALL",
    ManagedConfigurations = "MANAGED_CONFIGURATIONS",
    BlockUninstall = "BLOCK_UNINSTALL",
    PermissionGrant = "PERMISSION_GRANT",
    PackageAccess = "PACKAGE_ACCESS",
    EnableSystemApp = "ENABLE_SYSTEM_APP",
    NetworkActivityLogs = "NETWORK_ACTIVITY_LOGS",
    SecurityLogs = "SECURITY_LOGS"
}
export declare enum ApplicationPolicyInstallTypeEnum {
    InstallTypeUnspecified = "INSTALL_TYPE_UNSPECIFIED",
    Preinstalled = "PREINSTALLED",
    ForceInstalled = "FORCE_INSTALLED",
    Blocked = "BLOCKED",
    Available = "AVAILABLE",
    RequiredForSetup = "REQUIRED_FOR_SETUP",
    Kiosk = "KIOSK"
}
/**
 * Policy for an individual app.
**/
export declare class ApplicationPolicy extends SpeakeasyBase {
    accessibleTrackIds?: string[];
    alwaysOnVpnLockdownExemption?: ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum;
    autoUpdateMode?: ApplicationPolicyAutoUpdateModeEnum;
    connectedWorkAndPersonalApp?: ApplicationPolicyConnectedWorkAndPersonalAppEnum;
    defaultPermissionPolicy?: ApplicationPolicyDefaultPermissionPolicyEnum;
    delegatedScopes?: ApplicationPolicyDelegatedScopesEnum[];
    disabled?: boolean;
    extensionConfig?: ExtensionConfig;
    installType?: ApplicationPolicyInstallTypeEnum;
    lockTaskAllowed?: boolean;
    managedConfiguration?: Map<string, any>;
    managedConfigurationTemplate?: ManagedConfigurationTemplate;
    minimumVersionCode?: number;
    packageName?: string;
    permissionGrants?: PermissionGrant[];
}
