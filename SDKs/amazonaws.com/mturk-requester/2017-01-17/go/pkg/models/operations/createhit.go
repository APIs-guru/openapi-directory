package operations

import (
"openapi/pkg/models/shared")


type CreateHitxAmzTargetEnum string

const (
    CreateHitxAmzTargetEnumMTurkRequesterServiceV20170117CreateHit CreateHitxAmzTargetEnum = "MTurkRequesterServiceV20170117.CreateHIT"
)


type CreateHitHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateHitxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateHitRequest struct {
    Headers CreateHitHeaders 
    Request shared.CreateHitRequest `request:"mediaType=application/json"`
    
}

type CreateHitResponse struct {
    ContentType string 
    CreateHitResponse *shared.CreateHitResponse 
    RequestError *interface{} 
    ServiceFault *interface{} 
    StatusCode int64 
    
}

