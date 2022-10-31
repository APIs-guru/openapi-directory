package shared

type ListUsageForLicenseConfigurationRequest struct {
	Filters                 []Filter `json:"Filters,omitempty"`
	LicenseConfigurationArn string   `json:"LicenseConfigurationArn"`
	MaxResults              *int64   `json:"MaxResults,omitempty"`
	NextToken               *string  `json:"NextToken,omitempty"`
}
