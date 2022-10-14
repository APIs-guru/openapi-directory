package shared

type ListFailuresForLicenseConfigurationOperationsRequest struct {
	LicenseConfigurationArn string  `json:"LicenseConfigurationArn"`
	MaxResults              *int64  `json:"MaxResults,omitempty"`
	NextToken               *string `json:"NextToken,omitempty"`
}
