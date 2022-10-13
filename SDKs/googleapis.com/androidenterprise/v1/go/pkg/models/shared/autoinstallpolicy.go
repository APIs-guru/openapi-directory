package shared

type AutoInstallPolicyAutoInstallModeEnum string

const (
	AutoInstallPolicyAutoInstallModeEnumAutoInstallModeUnspecified AutoInstallPolicyAutoInstallModeEnum = "autoInstallModeUnspecified"
	AutoInstallPolicyAutoInstallModeEnumDoNotAutoInstall           AutoInstallPolicyAutoInstallModeEnum = "doNotAutoInstall"
	AutoInstallPolicyAutoInstallModeEnumAutoInstallOnce            AutoInstallPolicyAutoInstallModeEnum = "autoInstallOnce"
	AutoInstallPolicyAutoInstallModeEnumForceAutoInstall           AutoInstallPolicyAutoInstallModeEnum = "forceAutoInstall"
)

type AutoInstallPolicy struct {
	AutoInstallConstraint []AutoInstallConstraint               `json:"autoInstallConstraint"`
	AutoInstallMode       *AutoInstallPolicyAutoInstallModeEnum `json:"autoInstallMode"`
	AutoInstallPriority   *int32                                `json:"autoInstallPriority"`
	MinimumVersionCode    *int32                                `json:"minimumVersionCode"`
}
