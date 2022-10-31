package operations

import (
"openapi/pkg/models/shared")


type DeleteVocabularyXAmzTargetEnum string

const (
    DeleteVocabularyXAmzTargetEnumTranscribeDeleteVocabulary DeleteVocabularyXAmzTargetEnum = "Transcribe.DeleteVocabulary"
)


type DeleteVocabularyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteVocabularyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteVocabularyRequest struct {
    Headers DeleteVocabularyHeaders 
    Request shared.DeleteVocabularyRequest `request:"mediaType=application/json"`
    
}

type DeleteVocabularyResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

