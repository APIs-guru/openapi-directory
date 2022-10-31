package operations

import (
"openapi/pkg/models/shared")

type CreateAttributeGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateAttributeGroupRequestBody struct {
    Attributes string `json:"attributes"`
    ClientToken string `json:"clientToken"`
    Description *string `json:"description,omitempty"`
    Name string `json:"name"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateAttributeGroupRequest struct {
    Headers CreateAttributeGroupHeaders 
    Request CreateAttributeGroupRequestBody `request:"mediaType=application/json"`
    
}

type CreateAttributeGroupResponse struct {
    ConflictException *interface{} 
    ContentType string 
    CreateAttributeGroupResponse *shared.CreateAttributeGroupResponse 
    InternalServerException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

