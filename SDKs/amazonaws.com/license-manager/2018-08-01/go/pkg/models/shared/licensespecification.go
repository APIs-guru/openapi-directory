package shared

// LicenseSpecification
// Details for associating a license configuration with a resource.
type LicenseSpecification struct {
	AmiAssociationScope     *string `json:"AmiAssociationScope,omitempty"`
	LicenseConfigurationArn string  `json:"LicenseConfigurationArn"`
}
