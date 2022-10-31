package operations



type AppsRevokeAuthorizationForApplicationPathParams struct {
    AccessToken string `pathParam:"style=simple,explode=false,name=access_token"`
    ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
    
}

type AppsRevokeAuthorizationForApplicationRequest struct {
    PathParams AppsRevokeAuthorizationForApplicationPathParams 
    
}

type AppsRevokeAuthorizationForApplicationResponse struct {
    ContentType string 
    StatusCode int64 
    
}

