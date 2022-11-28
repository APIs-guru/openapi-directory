package shared

// SoftwareInformation
// Information about the software on the device.
type SoftwareInformation struct {
	InstallState      *string `json:"installState,omitempty"`
	InstalledVersion  *string `json:"installedVersion,omitempty"`
	InstallingVersion *string `json:"installingVersion,omitempty"`
}
