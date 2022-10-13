package operations

type EnterpriseAdminUpgradeLicenseRequestBody struct {
	License *string `json:"license"`
}

type EnterpriseAdminUpgradeLicenseRequest struct {
	Request *EnterpriseAdminUpgradeLicenseRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminUpgradeLicenseResponse struct {
	ContentType string
	StatusCode  int64
}
