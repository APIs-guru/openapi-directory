package shared

type ListLicenseSpecificationsForResourceResponse struct {
	LicenseSpecifications []LicenseSpecification `json:"LicenseSpecifications"`
	NextToken             *string                `json:"NextToken"`
}
