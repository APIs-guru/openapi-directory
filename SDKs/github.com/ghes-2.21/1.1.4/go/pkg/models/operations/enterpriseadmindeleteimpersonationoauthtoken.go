package operations



type EnterpriseAdminDeleteImpersonationOAuthTokenPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type EnterpriseAdminDeleteImpersonationOAuthTokenRequest struct {
    PathParams EnterpriseAdminDeleteImpersonationOAuthTokenPathParams 
    
}

type EnterpriseAdminDeleteImpersonationOAuthTokenResponse struct {
    ContentType string 
    StatusCode int64 
    
}

