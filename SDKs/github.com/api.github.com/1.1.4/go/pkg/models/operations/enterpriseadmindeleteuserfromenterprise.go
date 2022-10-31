package operations



type EnterpriseAdminDeleteUserFromEnterprisePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    ScimUserID string `pathParam:"style=simple,explode=false,name=scim_user_id"`
    
}

type EnterpriseAdminDeleteUserFromEnterpriseRequest struct {
    PathParams EnterpriseAdminDeleteUserFromEnterprisePathParams 
    
}

type EnterpriseAdminDeleteUserFromEnterpriseResponse struct {
    ContentType string 
    StatusCode int64 
    
}

