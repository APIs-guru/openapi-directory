package operations



type EnterpriseAdminCreateEnterpriseServerLicenseRequestBody struct {
    License string `json:"license"`
    Password *string `json:"password,omitempty"`
    Settings *string `json:"settings,omitempty"`
    
}

type EnterpriseAdminCreateEnterpriseServerLicenseRequest struct {
    Request *EnterpriseAdminCreateEnterpriseServerLicenseRequestBody `request:"mediaType=application/json"`
    
}

type EnterpriseAdminCreateEnterpriseServerLicenseResponse struct {
    ContentType string 
    StatusCode int64 
    
}

