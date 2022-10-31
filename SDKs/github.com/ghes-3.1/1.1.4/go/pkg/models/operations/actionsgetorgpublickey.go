package operations

import (
"openapi/pkg/models/shared")

type ActionsGetOrgPublicKeyPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type ActionsGetOrgPublicKeyRequest struct {
    PathParams ActionsGetOrgPublicKeyPathParams 
    
}

type ActionsGetOrgPublicKeyResponse struct {
    ContentType string 
    StatusCode int64 
    ActionsPublicKey *shared.ActionsPublicKey 
    
}

