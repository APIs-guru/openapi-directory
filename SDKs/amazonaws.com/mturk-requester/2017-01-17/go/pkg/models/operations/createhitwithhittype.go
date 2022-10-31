package operations

import (
"openapi/pkg/models/shared")


type CreateHitWithHitTypeXAmzTargetEnum string

const (
    CreateHitWithHitTypeXAmzTargetEnumMTurkRequesterServiceV20170117CreateHitWithHitType CreateHitWithHitTypeXAmzTargetEnum = "MTurkRequesterServiceV20170117.CreateHITWithHITType"
)


type CreateHitWithHitTypeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateHitWithHitTypeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateHitWithHitTypeRequest struct {
    Headers CreateHitWithHitTypeHeaders 
    Request shared.CreateHitWithHitTypeRequest `request:"mediaType=application/json"`
    
}

type CreateHitWithHitTypeResponse struct {
    ContentType string 
    CreateHitWithHitTypeResponse *shared.CreateHitWithHitTypeResponse 
    RequestError *interface{} 
    ServiceFault *interface{} 
    StatusCode int64 
    
}

