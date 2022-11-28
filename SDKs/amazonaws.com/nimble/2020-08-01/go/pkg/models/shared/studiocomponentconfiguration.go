package shared

// StudioComponentConfiguration
// The configuration of the studio component, based on component type.
type StudioComponentConfiguration struct {
	ActiveDirectoryConfiguration  *ActiveDirectoryConfiguration  `json:"activeDirectoryConfiguration,omitempty"`
	ComputeFarmConfiguration      *ComputeFarmConfiguration      `json:"computeFarmConfiguration,omitempty"`
	LicenseServiceConfiguration   *LicenseServiceConfiguration   `json:"licenseServiceConfiguration,omitempty"`
	SharedFileSystemConfiguration *SharedFileSystemConfiguration `json:"sharedFileSystemConfiguration,omitempty"`
}
