package operations

import (
"openapi/pkg/models/shared")

type CreateStreamKeyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type CreateStreamKeyRequestBody struct {
    ChannelArn string `json:"channelArn"`
    Tags map[string]string `json:"tags,omitempty"`
    
}

type CreateStreamKeyRequest struct {
    Headers CreateStreamKeyHeaders 
    Request CreateStreamKeyRequestBody `request:"mediaType=application/json"`
    
}

type CreateStreamKeyResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateStreamKeyResponse *shared.CreateStreamKeyResponse 
    PendingVerification *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

