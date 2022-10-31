package shared




type AutoInstallPolicyAutoInstallModeEnum string

const (
    AutoInstallPolicyAutoInstallModeEnumAutoInstallModeUnspecified AutoInstallPolicyAutoInstallModeEnum = "autoInstallModeUnspecified"
AutoInstallPolicyAutoInstallModeEnumDoNotAutoInstall AutoInstallPolicyAutoInstallModeEnum = "doNotAutoInstall"
AutoInstallPolicyAutoInstallModeEnumAutoInstallOnce AutoInstallPolicyAutoInstallModeEnum = "autoInstallOnce"
AutoInstallPolicyAutoInstallModeEnumForceAutoInstall AutoInstallPolicyAutoInstallModeEnum = "forceAutoInstall"
)


type AutoInstallPolicy struct {
    AutoInstallConstraint []AutoInstallConstraint `json:"autoInstallConstraint,omitempty"`
    AutoInstallMode *AutoInstallPolicyAutoInstallModeEnum `json:"autoInstallMode,omitempty"`
    AutoInstallPriority *int32 `json:"autoInstallPriority,omitempty"`
    MinimumVersionCode *int32 `json:"minimumVersionCode,omitempty"`
    
}

