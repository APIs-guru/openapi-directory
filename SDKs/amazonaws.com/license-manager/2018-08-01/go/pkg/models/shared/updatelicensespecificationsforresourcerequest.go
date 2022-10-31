package shared



type UpdateLicenseSpecificationsForResourceRequest struct {
    AddLicenseSpecifications []LicenseSpecification `json:"AddLicenseSpecifications,omitempty"`
    RemoveLicenseSpecifications []LicenseSpecification `json:"RemoveLicenseSpecifications,omitempty"`
    ResourceArn string `json:"ResourceArn"`
    
}

