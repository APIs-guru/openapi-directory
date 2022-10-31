package operations

import (
"openapi/pkg/models/shared")

type PostVideosOwnershipIDRefusePathParams struct {
    ID interface{} `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostVideosOwnershipIDRefuseSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type PostVideosOwnershipIDRefuseRequest struct {
    PathParams PostVideosOwnershipIDRefusePathParams 
    Security PostVideosOwnershipIDRefuseSecurity 
    
}

type PostVideosOwnershipIDRefuseResponse struct {
    ContentType string 
    StatusCode int64 
    
}

