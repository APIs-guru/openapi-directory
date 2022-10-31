package operations



type EnterpriseAdminDeletePersonalAccessTokenPathParams struct {
    TokenID int64 `pathParam:"style=simple,explode=false,name=token_id"`
    
}

type EnterpriseAdminDeletePersonalAccessTokenRequest struct {
    PathParams EnterpriseAdminDeletePersonalAccessTokenPathParams 
    
}

type EnterpriseAdminDeletePersonalAccessTokenResponse struct {
    ContentType string 
    StatusCode int64 
    
}

