package shared

type CreateLicenseConfigurationRequest struct {
	Description              *string                 `json:"Description,omitempty"`
	DisassociateWhenNotFound *bool                   `json:"DisassociateWhenNotFound,omitempty"`
	LicenseCount             *int64                  `json:"LicenseCount,omitempty"`
	LicenseCountHardLimit    *bool                   `json:"LicenseCountHardLimit,omitempty"`
	LicenseCountingType      LicenseCountingTypeEnum `json:"LicenseCountingType"`
	LicenseRules             []string                `json:"LicenseRules,omitempty"`
	Name                     string                  `json:"Name"`
	ProductInformationList   []ProductInformation    `json:"ProductInformationList,omitempty"`
	Tags                     []Tag                   `json:"Tags,omitempty"`
}
