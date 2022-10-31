package shared



type SoftwareInformation struct {
    InstallState *string `json:"installState,omitempty"`
    InstalledVersion *string `json:"installedVersion,omitempty"`
    InstallingVersion *string `json:"installingVersion,omitempty"`
    
}

