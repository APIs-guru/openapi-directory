package operations

import (
"openapi/pkg/models/shared")


type GetVocabularyFilterXAmzTargetEnum string

const (
    GetVocabularyFilterXAmzTargetEnumTranscribeGetVocabularyFilter GetVocabularyFilterXAmzTargetEnum = "Transcribe.GetVocabularyFilter"
)


type GetVocabularyFilterHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetVocabularyFilterXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetVocabularyFilterRequest struct {
    Headers GetVocabularyFilterHeaders 
    Request shared.GetVocabularyFilterRequest `request:"mediaType=application/json"`
    
}

type GetVocabularyFilterResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetVocabularyFilterResponse *shared.GetVocabularyFilterResponse 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

