package operations



type OauthAuthorizationsRevokeGrantForApplicationPathParams struct {
    AccessToken string `pathParam:"style=simple,explode=false,name=access_token"`
    ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
    
}

type OauthAuthorizationsRevokeGrantForApplicationRequest struct {
    PathParams OauthAuthorizationsRevokeGrantForApplicationPathParams 
    
}

type OauthAuthorizationsRevokeGrantForApplicationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

