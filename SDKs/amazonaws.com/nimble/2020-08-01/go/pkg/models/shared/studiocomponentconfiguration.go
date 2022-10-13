package shared

type StudioComponentConfiguration struct {
	ActiveDirectoryConfiguration  *ActiveDirectoryConfiguration  `json:"activeDirectoryConfiguration"`
	ComputeFarmConfiguration      *ComputeFarmConfiguration      `json:"computeFarmConfiguration"`
	LicenseServiceConfiguration   *LicenseServiceConfiguration   `json:"licenseServiceConfiguration"`
	SharedFileSystemConfiguration *SharedFileSystemConfiguration `json:"sharedFileSystemConfiguration"`
}
