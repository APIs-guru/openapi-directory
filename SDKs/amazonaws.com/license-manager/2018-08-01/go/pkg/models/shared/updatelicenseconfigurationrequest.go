package shared

type UpdateLicenseConfigurationRequest struct {
	Description                *string                         `json:"Description,omitempty"`
	DisassociateWhenNotFound   *bool                           `json:"DisassociateWhenNotFound,omitempty"`
	LicenseConfigurationArn    string                          `json:"LicenseConfigurationArn"`
	LicenseConfigurationStatus *LicenseConfigurationStatusEnum `json:"LicenseConfigurationStatus,omitempty"`
	LicenseCount               *int64                          `json:"LicenseCount,omitempty"`
	LicenseCountHardLimit      *bool                           `json:"LicenseCountHardLimit,omitempty"`
	LicenseRules               []string                        `json:"LicenseRules,omitempty"`
	Name                       *string                         `json:"Name,omitempty"`
	ProductInformationList     []ProductInformation            `json:"ProductInformationList,omitempty"`
}
