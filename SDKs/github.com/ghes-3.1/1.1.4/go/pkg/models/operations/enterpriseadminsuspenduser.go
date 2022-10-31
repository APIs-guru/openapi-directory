package operations



type EnterpriseAdminSuspendUserPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type EnterpriseAdminSuspendUserRequestBody struct {
    Reason *string `json:"reason,omitempty"`
    
}

type EnterpriseAdminSuspendUserRequest struct {
    PathParams EnterpriseAdminSuspendUserPathParams 
    Request *EnterpriseAdminSuspendUserRequestBody `request:"mediaType=application/json"`
    
}

type EnterpriseAdminSuspendUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

