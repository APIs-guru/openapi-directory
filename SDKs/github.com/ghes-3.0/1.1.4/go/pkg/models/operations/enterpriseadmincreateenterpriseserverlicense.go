package operations

type EnterpriseAdminCreateEnterpriseServerLicenseRequestBody struct {
	License  string  `json:"license"`
	Password *string `json:"password"`
	Settings *string `json:"settings"`
}

type EnterpriseAdminCreateEnterpriseServerLicenseRequest struct {
	Request *EnterpriseAdminCreateEnterpriseServerLicenseRequestBody `request:"mediaType=application/json"`
}

type EnterpriseAdminCreateEnterpriseServerLicenseResponse struct {
	ContentType string
	StatusCode  int64
}
