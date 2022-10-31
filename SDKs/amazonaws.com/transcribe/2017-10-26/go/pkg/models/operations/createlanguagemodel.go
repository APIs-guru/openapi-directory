package operations

import (
"openapi/pkg/models/shared")


type CreateLanguageModelXAmzTargetEnum string

const (
    CreateLanguageModelXAmzTargetEnumTranscribeCreateLanguageModel CreateLanguageModelXAmzTargetEnum = "Transcribe.CreateLanguageModel"
)


type CreateLanguageModelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateLanguageModelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateLanguageModelRequest struct {
    Headers CreateLanguageModelHeaders 
    Request shared.CreateLanguageModelRequest `request:"mediaType=application/json"`
    
}

type CreateLanguageModelResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateLanguageModelResponse *shared.CreateLanguageModelResponse 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    
}

