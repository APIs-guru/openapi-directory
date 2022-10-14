package shared

type LicenseSpecification struct {
	AmiAssociationScope     *string `json:"AmiAssociationScope,omitempty"`
	LicenseConfigurationArn string  `json:"LicenseConfigurationArn"`
}
