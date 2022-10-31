package operations

import (
"openapi/pkg/models/shared")


type CreatePatchBaselineXAmzTargetEnum string

const (
    CreatePatchBaselineXAmzTargetEnumAmazonSsmCreatePatchBaseline CreatePatchBaselineXAmzTargetEnum = "AmazonSSM.CreatePatchBaseline"
)


type CreatePatchBaselineHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreatePatchBaselineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreatePatchBaselineRequest struct {
    Headers CreatePatchBaselineHeaders 
    Request shared.CreatePatchBaselineRequest `request:"mediaType=application/json"`
    
}

type CreatePatchBaselineResponse struct {
    ContentType string 
    CreatePatchBaselineResult *shared.CreatePatchBaselineResult 
    IdempotentParameterMismatch *interface{} 
    InternalServerError *interface{} 
    ResourceLimitExceededException *interface{} 
    StatusCode int64 
    
}

