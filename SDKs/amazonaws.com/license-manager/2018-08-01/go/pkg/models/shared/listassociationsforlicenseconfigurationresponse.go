package shared

type ListAssociationsForLicenseConfigurationResponse struct {
	LicenseConfigurationAssociations []LicenseConfigurationAssociation `json:"LicenseConfigurationAssociations"`
	NextToken                        *string                           `json:"NextToken"`
}
