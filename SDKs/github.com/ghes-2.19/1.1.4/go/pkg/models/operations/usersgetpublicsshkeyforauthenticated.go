package operations

import (
"openapi/pkg/models/shared")

type UsersGetPublicSSHKeyForAuthenticatedPathParams struct {
    KeyID int64 `pathParam:"style=simple,explode=false,name=key_id"`
    
}

type UsersGetPublicSSHKeyForAuthenticatedRequest struct {
    PathParams UsersGetPublicSSHKeyForAuthenticatedPathParams 
    
}

type UsersGetPublicSSHKeyForAuthenticatedResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Key *shared.Key 
    
}

