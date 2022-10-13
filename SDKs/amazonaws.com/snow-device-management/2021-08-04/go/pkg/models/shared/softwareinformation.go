package shared

type SoftwareInformation struct {
	InstallState      *string `json:"installState"`
	InstalledVersion  *string `json:"installedVersion"`
	InstallingVersion *string `json:"installingVersion"`
}
