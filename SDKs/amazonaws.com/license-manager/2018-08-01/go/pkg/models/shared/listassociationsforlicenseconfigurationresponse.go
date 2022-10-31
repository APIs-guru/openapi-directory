package shared

type ListAssociationsForLicenseConfigurationResponse struct {
	LicenseConfigurationAssociations []LicenseConfigurationAssociation `json:"LicenseConfigurationAssociations,omitempty"`
	NextToken                        *string                           `json:"NextToken,omitempty"`
}
