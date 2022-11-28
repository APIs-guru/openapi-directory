package shared

// ExternallyHostedApkUsesPermission
// A permission used by this APK.
type ExternallyHostedApkUsesPermission struct {
	MaxSdkVersion *int32  `json:"maxSdkVersion,omitempty"`
	Name          *string `json:"name,omitempty"`
}
