package operations

import (
"openapi/pkg/models/shared")


type StartTextTranslationJobXAmzTargetEnum string

const (
    StartTextTranslationJobXAmzTargetEnumAwsShineFrontendService20170701StartTextTranslationJob StartTextTranslationJobXAmzTargetEnum = "AWSShineFrontendService_20170701.StartTextTranslationJob"
)


type StartTextTranslationJobHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartTextTranslationJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartTextTranslationJobRequest struct {
    Headers StartTextTranslationJobHeaders 
    Request shared.StartTextTranslationJobRequest `request:"mediaType=application/json"`
    
}

type StartTextTranslationJobResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    InvalidRequestException *interface{} 
    ResourceNotFoundException *interface{} 
    StartTextTranslationJobResponse *shared.StartTextTranslationJobResponse 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    UnsupportedLanguagePairException *interface{} 
    
}

