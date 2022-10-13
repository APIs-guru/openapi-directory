package shared

type ListAssociationsForLicenseConfigurationRequest struct {
	LicenseConfigurationArn string  `json:"LicenseConfigurationArn"`
	MaxResults              *int64  `json:"MaxResults"`
	NextToken               *string `json:"NextToken"`
}
