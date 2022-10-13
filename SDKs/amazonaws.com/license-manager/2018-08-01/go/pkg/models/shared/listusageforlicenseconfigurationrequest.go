package shared

type ListUsageForLicenseConfigurationRequest struct {
	Filters                 []Filter `json:"Filters"`
	LicenseConfigurationArn string   `json:"LicenseConfigurationArn"`
	MaxResults              *int64   `json:"MaxResults"`
	NextToken               *string  `json:"NextToken"`
}
