package shared

type ListLicenseConfigurationsRequest struct {
	Filters                  []Filter `json:"Filters,omitempty"`
	LicenseConfigurationArns []string `json:"LicenseConfigurationArns,omitempty"`
	MaxResults               *int64   `json:"MaxResults,omitempty"`
	NextToken                *string  `json:"NextToken,omitempty"`
}
