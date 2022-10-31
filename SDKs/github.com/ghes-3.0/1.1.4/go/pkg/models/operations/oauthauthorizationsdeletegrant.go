package operations

import (
"openapi/pkg/models/shared")

type OauthAuthorizationsDeleteGrantPathParams struct {
    GrantID int64 `pathParam:"style=simple,explode=false,name=grant_id"`
    
}

type OauthAuthorizationsDeleteGrantRequest struct {
    PathParams OauthAuthorizationsDeleteGrantPathParams 
    
}

type OauthAuthorizationsDeleteGrantResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

