package shared

type CreateLicenseConfigurationRequest struct {
	Description              *string                 `json:"Description"`
	DisassociateWhenNotFound *bool                   `json:"DisassociateWhenNotFound"`
	LicenseCount             *int64                  `json:"LicenseCount"`
	LicenseCountHardLimit    *bool                   `json:"LicenseCountHardLimit"`
	LicenseCountingType      LicenseCountingTypeEnum `json:"LicenseCountingType"`
	LicenseRules             []string                `json:"LicenseRules"`
	Name                     string                  `json:"Name"`
	ProductInformationList   []ProductInformation    `json:"ProductInformationList"`
	Tags                     []Tag                   `json:"Tags"`
}
