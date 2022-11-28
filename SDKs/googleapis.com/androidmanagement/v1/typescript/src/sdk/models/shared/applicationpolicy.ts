import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExtensionConfig } from "./extensionconfig";
import { ManagedConfigurationTemplate } from "./managedconfigurationtemplate";
import { PermissionGrant } from "./permissiongrant";


export enum ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum {
    AlwaysOnVpnLockdownExemptionUnspecified = "ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED",
    VpnLockdownEnforced = "VPN_LOCKDOWN_ENFORCED",
    VpnLockdownExemption = "VPN_LOCKDOWN_EXEMPTION"
}

export enum ApplicationPolicyAutoUpdateModeEnum {
    AutoUpdateModeUnspecified = "AUTO_UPDATE_MODE_UNSPECIFIED",
    AutoUpdateDefault = "AUTO_UPDATE_DEFAULT",
    AutoUpdatePostponed = "AUTO_UPDATE_POSTPONED",
    AutoUpdateHighPriority = "AUTO_UPDATE_HIGH_PRIORITY"
}

export enum ApplicationPolicyConnectedWorkAndPersonalAppEnum {
    ConnectedWorkAndPersonalAppUnspecified = "CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED",
    ConnectedWorkAndPersonalAppDisallowed = "CONNECTED_WORK_AND_PERSONAL_APP_DISALLOWED",
    ConnectedWorkAndPersonalAppAllowed = "CONNECTED_WORK_AND_PERSONAL_APP_ALLOWED"
}

export enum ApplicationPolicyDefaultPermissionPolicyEnum {
    PermissionPolicyUnspecified = "PERMISSION_POLICY_UNSPECIFIED",
    Prompt = "PROMPT",
    Grant = "GRANT",
    Deny = "DENY"
}

export enum ApplicationPolicyDelegatedScopesEnum {
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

export enum ApplicationPolicyInstallTypeEnum {
    InstallTypeUnspecified = "INSTALL_TYPE_UNSPECIFIED",
    Preinstalled = "PREINSTALLED",
    ForceInstalled = "FORCE_INSTALLED",
    Blocked = "BLOCKED",
    Available = "AVAILABLE",
    RequiredForSetup = "REQUIRED_FOR_SETUP",
    Kiosk = "KIOSK"
}


// ApplicationPolicy
/** 
 * Policy for an individual app.
**/
export class ApplicationPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessibleTrackIds" })
  accessibleTrackIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=alwaysOnVpnLockdownExemption" })
  alwaysOnVpnLockdownExemption?: ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum;

  @SpeakeasyMetadata({ data: "json, name=autoUpdateMode" })
  autoUpdateMode?: ApplicationPolicyAutoUpdateModeEnum;

  @SpeakeasyMetadata({ data: "json, name=connectedWorkAndPersonalApp" })
  connectedWorkAndPersonalApp?: ApplicationPolicyConnectedWorkAndPersonalAppEnum;

  @SpeakeasyMetadata({ data: "json, name=defaultPermissionPolicy" })
  defaultPermissionPolicy?: ApplicationPolicyDefaultPermissionPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=delegatedScopes" })
  delegatedScopes?: ApplicationPolicyDelegatedScopesEnum[];

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=extensionConfig" })
  extensionConfig?: ExtensionConfig;

  @SpeakeasyMetadata({ data: "json, name=installType" })
  installType?: ApplicationPolicyInstallTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=lockTaskAllowed" })
  lockTaskAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=managedConfiguration" })
  managedConfiguration?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=managedConfigurationTemplate" })
  managedConfigurationTemplate?: ManagedConfigurationTemplate;

  @SpeakeasyMetadata({ data: "json, name=minimumVersionCode" })
  minimumVersionCode?: number;

  @SpeakeasyMetadata({ data: "json, name=packageName" })
  packageName?: string;

  @SpeakeasyMetadata({ data: "json, name=permissionGrants", elemType: PermissionGrant })
  permissionGrants?: PermissionGrant[];
}
