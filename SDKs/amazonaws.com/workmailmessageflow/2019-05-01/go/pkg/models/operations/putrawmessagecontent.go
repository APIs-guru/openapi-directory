package operations

import (
"openapi/pkg/models/shared")

type PutRawMessageContentPathParams struct {
    MessageID string `pathParam:"style=simple,explode=false,name=messageId"`
    
}

type PutRawMessageContentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutRawMessageContentRequestBodyContent struct {
    S3Reference *shared.S3Reference `json:"s3Reference,omitempty"`
    
}

type PutRawMessageContentRequestBody struct {
    Content PutRawMessageContentRequestBodyContent `json:"content"`
    
}

type PutRawMessageContentRequest struct {
    PathParams PutRawMessageContentPathParams 
    Headers PutRawMessageContentHeaders 
    Request PutRawMessageContentRequestBody `request:"mediaType=application/json"`
    
}

type PutRawMessageContentResponse struct {
    ContentType string 
    InvalidContentLocation *interface{} 
    MessageFrozen *interface{} 
    MessageRejected *interface{} 
    PutRawMessageContentResponse map[string]interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

