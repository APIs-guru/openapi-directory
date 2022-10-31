package operations



type OauthAuthorizationsRevokeAuthorizationForApplicationPathParams struct {
    AccessToken string `pathParam:"style=simple,explode=false,name=access_token"`
    ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
    
}

type OauthAuthorizationsRevokeAuthorizationForApplicationRequest struct {
    PathParams OauthAuthorizationsRevokeAuthorizationForApplicationPathParams 
    
}

type OauthAuthorizationsRevokeAuthorizationForApplicationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

