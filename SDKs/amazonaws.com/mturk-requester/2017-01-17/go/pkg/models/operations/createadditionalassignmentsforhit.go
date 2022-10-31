package operations

import (
"openapi/pkg/models/shared")


type CreateAdditionalAssignmentsForHitxAmzTargetEnum string

const (
    CreateAdditionalAssignmentsForHitxAmzTargetEnumMTurkRequesterServiceV20170117CreateAdditionalAssignmentsForHit CreateAdditionalAssignmentsForHitxAmzTargetEnum = "MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT"
)


type CreateAdditionalAssignmentsForHitHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateAdditionalAssignmentsForHitxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateAdditionalAssignmentsForHitRequest struct {
    Headers CreateAdditionalAssignmentsForHitHeaders 
    Request shared.CreateAdditionalAssignmentsForHitRequest `request:"mediaType=application/json"`
    
}

type CreateAdditionalAssignmentsForHitResponse struct {
    ContentType string 
    CreateAdditionalAssignmentsForHitResponse map[string]interface{} 
    RequestError *interface{} 
    ServiceFault *interface{} 
    StatusCode int64 
    
}

