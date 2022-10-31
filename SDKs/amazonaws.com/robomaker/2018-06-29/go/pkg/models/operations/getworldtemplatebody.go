package operations

import (
"openapi/pkg/models/shared")

type GetWorldTemplateBodyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetWorldTemplateBodyRequestBody struct {
    GenerationJob *string `json:"generationJob,omitempty"`
    Template *string `json:"template,omitempty"`
    
}

type GetWorldTemplateBodyRequest struct {
    Headers GetWorldTemplateBodyHeaders 
    Request GetWorldTemplateBodyRequestBody `request:"mediaType=application/json"`
    
}

type GetWorldTemplateBodyResponse struct {
    ContentType string 
    GetWorldTemplateBodyResponse *shared.GetWorldTemplateBodyResponse 
    InternalServerException *interface{} 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

