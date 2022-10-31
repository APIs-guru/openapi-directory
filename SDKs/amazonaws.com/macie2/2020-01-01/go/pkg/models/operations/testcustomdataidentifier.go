package operations

import (
"openapi/pkg/models/shared")

type TestCustomDataIdentifierHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type TestCustomDataIdentifierRequestBody struct {
    IgnoreWords []string `json:"ignoreWords,omitempty"`
    Keywords []string `json:"keywords,omitempty"`
    MaximumMatchDistance *int64 `json:"maximumMatchDistance,omitempty"`
    Regex string `json:"regex"`
    SampleText string `json:"sampleText"`
    
}

type TestCustomDataIdentifierRequest struct {
    Headers TestCustomDataIdentifierHeaders 
    Request TestCustomDataIdentifierRequestBody `request:"mediaType=application/json"`
    
}

type TestCustomDataIdentifierResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    TestCustomDataIdentifierResponse *shared.TestCustomDataIdentifierResponse 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

