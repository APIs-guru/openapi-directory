package shared

type LicenseSpecification struct {
	AmiAssociationScope     *string `json:"AmiAssociationScope"`
	LicenseConfigurationArn string  `json:"LicenseConfigurationArn"`
}
