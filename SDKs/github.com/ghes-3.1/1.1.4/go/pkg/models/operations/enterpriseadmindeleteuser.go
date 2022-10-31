package operations



type EnterpriseAdminDeleteUserPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type EnterpriseAdminDeleteUserRequest struct {
    PathParams EnterpriseAdminDeleteUserPathParams 
    
}

type EnterpriseAdminDeleteUserResponse struct {
    ContentType string 
    StatusCode int64 
    
}

