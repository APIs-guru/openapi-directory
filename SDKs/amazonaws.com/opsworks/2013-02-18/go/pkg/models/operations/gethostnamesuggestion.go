package operations

import (
"openapi/pkg/models/shared")


type GetHostnameSuggestionXAmzTargetEnum string

const (
    GetHostnameSuggestionXAmzTargetEnumOpsWorks20130218GetHostnameSuggestion GetHostnameSuggestionXAmzTargetEnum = "OpsWorks_20130218.GetHostnameSuggestion"
)


type GetHostnameSuggestionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetHostnameSuggestionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetHostnameSuggestionRequest struct {
    Headers GetHostnameSuggestionHeaders 
    Request shared.GetHostnameSuggestionRequest `request:"mediaType=application/json"`
    
}

type GetHostnameSuggestionResponse struct {
    ContentType string 
    GetHostnameSuggestionResult *shared.GetHostnameSuggestionResult 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

