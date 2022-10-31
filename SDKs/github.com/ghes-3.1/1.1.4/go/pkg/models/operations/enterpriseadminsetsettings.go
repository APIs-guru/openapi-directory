package operations



type EnterpriseAdminSetSettingsRequestBody struct {
    Settings string `json:"settings"`
    
}

type EnterpriseAdminSetSettingsRequest struct {
    Request *EnterpriseAdminSetSettingsRequestBody `request:"mediaType=application/json"`
    
}

type EnterpriseAdminSetSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

