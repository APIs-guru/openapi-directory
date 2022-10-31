package shared



type ListUsageForLicenseConfigurationResponse struct {
    LicenseConfigurationUsageList []LicenseConfigurationUsage `json:"LicenseConfigurationUsageList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

