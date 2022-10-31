package shared

type ListLicenseSpecificationsForResourceResponse struct {
	LicenseSpecifications []LicenseSpecification `json:"LicenseSpecifications,omitempty"`
	NextToken             *string                `json:"NextToken,omitempty"`
}
