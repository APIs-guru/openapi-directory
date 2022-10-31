package operations

import (
"openapi/pkg/models/shared")

type CreateCustomDataIdentifierHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateCustomDataIdentifierRequestBody struct {
    ClientToken *string `json:"clientToken,omitempty"`
    Description *string `json:"description,omitempty"`
    IgnoreWords []string `json:"ignoreWords,omitempty"`
    Keywords []string `json:"keywords,omitempty"`
    MaximumMatchDistance *int64 `json:"maximumMatchDistance,omitempty"`
    Name *string `json:"name,omitempty"`
    Regex *string `json:"regex,omitempty"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateCustomDataIdentifierRequest struct {
    Headers CreateCustomDataIdentifierHeaders 
    Request CreateCustomDataIdentifierRequestBody `request:"mediaType=application/json"`
    
}

type CreateCustomDataIdentifierResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    CreateCustomDataIdentifierResponse *shared.CreateCustomDataIdentifierResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

