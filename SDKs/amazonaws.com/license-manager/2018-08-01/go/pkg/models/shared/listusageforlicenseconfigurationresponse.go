package shared

type ListUsageForLicenseConfigurationResponse struct {
	LicenseConfigurationUsageList []LicenseConfigurationUsage `json:"LicenseConfigurationUsageList"`
	NextToken                     *string                     `json:"NextToken"`
}
