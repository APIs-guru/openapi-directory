package operations

import (
"openapi/pkg/models/shared")


type DeleteLanguageModelXAmzTargetEnum string

const (
    DeleteLanguageModelXAmzTargetEnumTranscribeDeleteLanguageModel DeleteLanguageModelXAmzTargetEnum = "Transcribe.DeleteLanguageModel"
)


type DeleteLanguageModelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteLanguageModelXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteLanguageModelRequest struct {
    Headers DeleteLanguageModelHeaders 
    Request shared.DeleteLanguageModelRequest `request:"mediaType=application/json"`
    
}

type DeleteLanguageModelResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    
}

