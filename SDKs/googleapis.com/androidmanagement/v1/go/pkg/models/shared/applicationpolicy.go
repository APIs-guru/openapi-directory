package shared

type ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum string

const (
	ApplicationPolicyAlwaysOnVpnLockdownExemptionEnumAlwaysOnVpnLockdownExemptionUnspecified ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum = "ALWAYS_ON_VPN_LOCKDOWN_EXEMPTION_UNSPECIFIED"
	ApplicationPolicyAlwaysOnVpnLockdownExemptionEnumVpnLockdownEnforced                     ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum = "VPN_LOCKDOWN_ENFORCED"
	ApplicationPolicyAlwaysOnVpnLockdownExemptionEnumVpnLockdownExemption                    ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum = "VPN_LOCKDOWN_EXEMPTION"
)

type ApplicationPolicyAutoUpdateModeEnum string

const (
	ApplicationPolicyAutoUpdateModeEnumAutoUpdateModeUnspecified ApplicationPolicyAutoUpdateModeEnum = "AUTO_UPDATE_MODE_UNSPECIFIED"
	ApplicationPolicyAutoUpdateModeEnumAutoUpdateDefault         ApplicationPolicyAutoUpdateModeEnum = "AUTO_UPDATE_DEFAULT"
	ApplicationPolicyAutoUpdateModeEnumAutoUpdatePostponed       ApplicationPolicyAutoUpdateModeEnum = "AUTO_UPDATE_POSTPONED"
	ApplicationPolicyAutoUpdateModeEnumAutoUpdateHighPriority    ApplicationPolicyAutoUpdateModeEnum = "AUTO_UPDATE_HIGH_PRIORITY"
)

type ApplicationPolicyConnectedWorkAndPersonalAppEnum string

const (
	ApplicationPolicyConnectedWorkAndPersonalAppEnumConnectedWorkAndPersonalAppUnspecified ApplicationPolicyConnectedWorkAndPersonalAppEnum = "CONNECTED_WORK_AND_PERSONAL_APP_UNSPECIFIED"
	ApplicationPolicyConnectedWorkAndPersonalAppEnumConnectedWorkAndPersonalAppDisallowed  ApplicationPolicyConnectedWorkAndPersonalAppEnum = "CONNECTED_WORK_AND_PERSONAL_APP_DISALLOWED"
	ApplicationPolicyConnectedWorkAndPersonalAppEnumConnectedWorkAndPersonalAppAllowed     ApplicationPolicyConnectedWorkAndPersonalAppEnum = "CONNECTED_WORK_AND_PERSONAL_APP_ALLOWED"
)

type ApplicationPolicyDefaultPermissionPolicyEnum string

const (
	ApplicationPolicyDefaultPermissionPolicyEnumPermissionPolicyUnspecified ApplicationPolicyDefaultPermissionPolicyEnum = "PERMISSION_POLICY_UNSPECIFIED"
	ApplicationPolicyDefaultPermissionPolicyEnumPrompt                      ApplicationPolicyDefaultPermissionPolicyEnum = "PROMPT"
	ApplicationPolicyDefaultPermissionPolicyEnumGrant                       ApplicationPolicyDefaultPermissionPolicyEnum = "GRANT"
	ApplicationPolicyDefaultPermissionPolicyEnumDeny                        ApplicationPolicyDefaultPermissionPolicyEnum = "DENY"
)

type ApplicationPolicyDelegatedScopesEnum string

const (
	ApplicationPolicyDelegatedScopesEnumDelegatedScopeUnspecified ApplicationPolicyDelegatedScopesEnum = "DELEGATED_SCOPE_UNSPECIFIED"
	ApplicationPolicyDelegatedScopesEnumCertInstall               ApplicationPolicyDelegatedScopesEnum = "CERT_INSTALL"
	ApplicationPolicyDelegatedScopesEnumManagedConfigurations     ApplicationPolicyDelegatedScopesEnum = "MANAGED_CONFIGURATIONS"
	ApplicationPolicyDelegatedScopesEnumBlockUninstall            ApplicationPolicyDelegatedScopesEnum = "BLOCK_UNINSTALL"
	ApplicationPolicyDelegatedScopesEnumPermissionGrant           ApplicationPolicyDelegatedScopesEnum = "PERMISSION_GRANT"
	ApplicationPolicyDelegatedScopesEnumPackageAccess             ApplicationPolicyDelegatedScopesEnum = "PACKAGE_ACCESS"
	ApplicationPolicyDelegatedScopesEnumEnableSystemApp           ApplicationPolicyDelegatedScopesEnum = "ENABLE_SYSTEM_APP"
	ApplicationPolicyDelegatedScopesEnumNetworkActivityLogs       ApplicationPolicyDelegatedScopesEnum = "NETWORK_ACTIVITY_LOGS"
	ApplicationPolicyDelegatedScopesEnumSecurityLogs              ApplicationPolicyDelegatedScopesEnum = "SECURITY_LOGS"
)

type ApplicationPolicyInstallTypeEnum string

const (
	ApplicationPolicyInstallTypeEnumInstallTypeUnspecified ApplicationPolicyInstallTypeEnum = "INSTALL_TYPE_UNSPECIFIED"
	ApplicationPolicyInstallTypeEnumPreinstalled           ApplicationPolicyInstallTypeEnum = "PREINSTALLED"
	ApplicationPolicyInstallTypeEnumForceInstalled         ApplicationPolicyInstallTypeEnum = "FORCE_INSTALLED"
	ApplicationPolicyInstallTypeEnumBlocked                ApplicationPolicyInstallTypeEnum = "BLOCKED"
	ApplicationPolicyInstallTypeEnumAvailable              ApplicationPolicyInstallTypeEnum = "AVAILABLE"
	ApplicationPolicyInstallTypeEnumRequiredForSetup       ApplicationPolicyInstallTypeEnum = "REQUIRED_FOR_SETUP"
	ApplicationPolicyInstallTypeEnumKiosk                  ApplicationPolicyInstallTypeEnum = "KIOSK"
)

type ApplicationPolicy struct {
	AccessibleTrackIds           []string                                           `json:"accessibleTrackIds"`
	AlwaysOnVpnLockdownExemption *ApplicationPolicyAlwaysOnVpnLockdownExemptionEnum `json:"alwaysOnVpnLockdownExemption"`
	AutoUpdateMode               *ApplicationPolicyAutoUpdateModeEnum               `json:"autoUpdateMode"`
	ConnectedWorkAndPersonalApp  *ApplicationPolicyConnectedWorkAndPersonalAppEnum  `json:"connectedWorkAndPersonalApp"`
	DefaultPermissionPolicy      *ApplicationPolicyDefaultPermissionPolicyEnum      `json:"defaultPermissionPolicy"`
	DelegatedScopes              []ApplicationPolicyDelegatedScopesEnum             `json:"delegatedScopes"`
	Disabled                     *bool                                              `json:"disabled"`
	ExtensionConfig              *ExtensionConfig                                   `json:"extensionConfig"`
	InstallType                  *ApplicationPolicyInstallTypeEnum                  `json:"installType"`
	LockTaskAllowed              *bool                                              `json:"lockTaskAllowed"`
	ManagedConfiguration         map[string]interface{}                             `json:"managedConfiguration"`
	ManagedConfigurationTemplate *ManagedConfigurationTemplate                      `json:"managedConfigurationTemplate"`
	MinimumVersionCode           *int32                                             `json:"minimumVersionCode"`
	PackageName                  *string                                            `json:"packageName"`
	PermissionGrants             []PermissionGrant                                  `json:"permissionGrants"`
}
