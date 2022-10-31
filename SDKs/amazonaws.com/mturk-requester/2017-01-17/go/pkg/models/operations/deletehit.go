package operations

import (
"openapi/pkg/models/shared")


type DeleteHitxAmzTargetEnum string

const (
    DeleteHitxAmzTargetEnumMTurkRequesterServiceV20170117DeleteHit DeleteHitxAmzTargetEnum = "MTurkRequesterServiceV20170117.DeleteHIT"
)


type DeleteHitHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteHitxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteHitRequest struct {
    Headers DeleteHitHeaders 
    Request shared.DeleteHitRequest `request:"mediaType=application/json"`
    
}

type DeleteHitResponse struct {
    ContentType string 
    DeleteHitResponse map[string]interface{} 
    RequestError *interface{} 
    ServiceFault *interface{} 
    StatusCode int64 
    
}

