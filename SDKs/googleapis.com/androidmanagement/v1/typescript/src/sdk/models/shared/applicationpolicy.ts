import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExtensionConfig } from "./extensionconfig";
import { ManagedConfigurationTemplate } from "./managedconfigurationtemplate";
import { PermissionGrant } from "./permissiongrant";

export enum ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum {
    AlwaysOnVpnLockdownExemptionUnspecified = "ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED"
,    VpnLockdownEnforced = "VPN_LOCKDOWN_ENFORCED"
,    VpnLockdownExemption = "VPN_LOCKDOWN_EXEMPTION"
}

export enum ApplicationPolicyAutoUpdateModeEnum {
    AutoUpdateModeUnspecified = "AUTO_UPDATE_MODE_UNSPECIFIED"
,    AutoUpdateDefault = "AUTO_UPDATE_DEFAULT"
,    AutoUpdatePostponed = "AUTO_UPDATE_POSTPONED"
,    AutoUpdateHighPriority = "AUTO_UPDATE_HIGH_PRIORITY"
}

export enum ApplicationPolicyConnectedWorkAndPersonalAppEnum {
    ConnectedWorkAndPersonalAppUnspecified = "CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED"
,    ConnectedWorkAndPersonalAppDisallowed = "CONNECTED_WORK_AND_PERSONAL_APP_DISALLOWED"
,    ConnectedWorkAndPersonalAppAllowed = "CONNECTED_WORK_AND_PERSONAL_APP_ALLOWED"
}

export enum ApplicationPolicyDefaultPermissionPolicyEnum {
    PermissionPolicyUnspecified = "PERMISSION_POLICY_UNSPECIFIED"
,    Prompt = "PROMPT"
,    Grant = "GRANT"
,    Deny = "DENY"
}

export enum ApplicationPolicyDelegatedScopesEnum {
    DelegatedScopeUnspecified = "DELEGATED_SCOPE_UNSPECIFIED"
,    CertInstall = "CERT_INSTALL"
,    ManagedConfigurations = "MANAGED_CONFIGURATIONS"
,    BlockUninstall = "BLOCK_UNINSTALL"
,    PermissionGrant = "PERMISSION_GRANT"
,    PackageAccess = "PACKAGE_ACCESS"
,    EnableSystemApp = "ENABLE_SYSTEM_APP"
,    NetworkActivityLogs = "NETWORK_ACTIVITY_LOGS"
,    SecurityLogs = "SECURITY_LOGS"
}

export enum ApplicationPolicyInstallTypeEnum {
    InstallTypeUnspecified = "INSTALL_TYPE_UNSPECIFIED"
,    Preinstalled = "PREINSTALLED"
,    ForceInstalled = "FORCE_INSTALLED"
,    Blocked = "BLOCKED"
,    Available = "AVAILABLE"
,    RequiredForSetup = "REQUIRED_FOR_SETUP"
,    Kiosk = "KIOSK"
}


// ApplicationPolicy
/** 
 * Policy for an individual app.
**/
export class ApplicationPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessibleTrackIds" })
  accessibleTrackIds?: string[];

  @Metadata({ data: "json, name=alwaysOnVpnLockdownExemption" })
  alwaysOnVpnLockdownExemption?: ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum;

  @Metadata({ data: "json, name=autoUpdateMode" })
  autoUpdateMode?: ApplicationPolicyAutoUpdateModeEnum;

  @Metadata({ data: "json, name=connectedWorkAndPersonalApp" })
  connectedWorkAndPersonalApp?: ApplicationPolicyConnectedWorkAndPersonalAppEnum;

  @Metadata({ data: "json, name=defaultPermissionPolicy" })
  defaultPermissionPolicy?: ApplicationPolicyDefaultPermissionPolicyEnum;

  @Metadata({ data: "json, name=delegatedScopes" })
  delegatedScopes?: ApplicationPolicyDelegatedScopesEnum[];

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=extensionConfig" })
  extensionConfig?: ExtensionConfig;

  @Metadata({ data: "json, name=installType" })
  installType?: ApplicationPolicyInstallTypeEnum;

  @Metadata({ data: "json, name=lockTaskAllowed" })
  lockTaskAllowed?: boolean;

  @Metadata({ data: "json, name=managedConfiguration" })
  managedConfiguration?: Map<string, any>;

  @Metadata({ data: "json, name=managedConfigurationTemplate" })
  managedConfigurationTemplate?: ManagedConfigurationTemplate;

  @Metadata({ data: "json, name=minimumVersionCode" })
  minimumVersionCode?: number;

  @Metadata({ data: "json, name=packageName" })
  packageName?: string;

  @Metadata({ data: "json, name=permissionGrants", elemType: shared.PermissionGrant })
  permissionGrants?: PermissionGrant[];
}
