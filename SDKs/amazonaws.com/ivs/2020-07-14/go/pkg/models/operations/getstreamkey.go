package operations

import (
"openapi/pkg/models/shared")

type GetStreamKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetStreamKeyRequestBody struct {
    Arn string `json:"arn"`
    
}

type GetStreamKeyRequest struct {
    Headers GetStreamKeyHeaders 
    Request GetStreamKeyRequestBody `request:"mediaType=application/json"`
    
}

type GetStreamKeyResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetStreamKeyResponse *shared.GetStreamKeyResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

