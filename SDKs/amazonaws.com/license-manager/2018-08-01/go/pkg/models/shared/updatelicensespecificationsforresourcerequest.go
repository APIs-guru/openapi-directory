package shared

type UpdateLicenseSpecificationsForResourceRequest struct {
	AddLicenseSpecifications    []LicenseSpecification `json:"AddLicenseSpecifications"`
	RemoveLicenseSpecifications []LicenseSpecification `json:"RemoveLicenseSpecifications"`
	ResourceArn                 string                 `json:"ResourceArn"`
}
