package shared

type ListLicenseConfigurationsRequest struct {
	Filters                  []Filter `json:"Filters"`
	LicenseConfigurationArns []string `json:"LicenseConfigurationArns"`
	MaxResults               *int64   `json:"MaxResults"`
	NextToken                *string  `json:"NextToken"`
}
