package shared

type ListLicenseConfigurationsResponse struct {
	LicenseConfigurations []LicenseConfiguration `json:"LicenseConfigurations"`
	NextToken             *string                `json:"NextToken"`
}
