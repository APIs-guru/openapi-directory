package operations

import (
"openapi/pkg/models/shared")


type UpdateHitReviewStatusXAmzTargetEnum string

const (
    UpdateHitReviewStatusXAmzTargetEnumMTurkRequesterServiceV20170117UpdateHitReviewStatus UpdateHitReviewStatusXAmzTargetEnum = "MTurkRequesterServiceV20170117.UpdateHITReviewStatus"
)


type UpdateHitReviewStatusHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateHitReviewStatusXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateHitReviewStatusRequest struct {
    Headers UpdateHitReviewStatusHeaders 
    Request shared.UpdateHitReviewStatusRequest `request:"mediaType=application/json"`
    
}

type UpdateHitReviewStatusResponse struct {
    ContentType string 
    RequestError *interface{} 
    ServiceFault *interface{} 
    StatusCode int64 
    UpdateHitReviewStatusResponse map[string]interface{} 
    
}

