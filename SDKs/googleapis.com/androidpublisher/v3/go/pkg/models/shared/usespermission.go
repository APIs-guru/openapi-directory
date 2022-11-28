package shared

// UsesPermission
// A permission used by this APK.
type UsesPermission struct {
	MaxSdkVersion *int32  `json:"maxSdkVersion,omitempty"`
	Name          *string `json:"name,omitempty"`
}
