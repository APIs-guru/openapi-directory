package shared

type UpdateLicenseConfigurationRequest struct {
	Description                *string                         `json:"Description"`
	DisassociateWhenNotFound   *bool                           `json:"DisassociateWhenNotFound"`
	LicenseConfigurationArn    string                          `json:"LicenseConfigurationArn"`
	LicenseConfigurationStatus *LicenseConfigurationStatusEnum `json:"LicenseConfigurationStatus"`
	LicenseCount               *int64                          `json:"LicenseCount"`
	LicenseCountHardLimit      *bool                           `json:"LicenseCountHardLimit"`
	LicenseRules               []string                        `json:"LicenseRules"`
	Name                       *string                         `json:"Name"`
	ProductInformationList     []ProductInformation            `json:"ProductInformationList"`
}
