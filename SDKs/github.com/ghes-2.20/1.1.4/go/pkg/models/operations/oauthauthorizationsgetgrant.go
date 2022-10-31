package operations

import (
"openapi/pkg/models/shared")

type OauthAuthorizationsGetGrantPathParams struct {
    GrantID int64 `pathParam:"style=simple,explode=false,name=grant_id"`
    
}

type OauthAuthorizationsGetGrantRequest struct {
    PathParams OauthAuthorizationsGetGrantPathParams 
    
}

type OauthAuthorizationsGetGrantResponse struct {
    ContentType string 
    StatusCode int64 
    ApplicationGrant *shared.ApplicationGrant 
    BasicError *shared.BasicError 
    
}

