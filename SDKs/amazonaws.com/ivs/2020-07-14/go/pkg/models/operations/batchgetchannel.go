package operations

import (
"openapi/pkg/models/shared")

type BatchGetChannelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type BatchGetChannelRequestBody struct {
    Arns []string `json:"arns"`
    
}

type BatchGetChannelRequest struct {
    Headers BatchGetChannelHeaders 
    Request BatchGetChannelRequestBody `request:"mediaType=application/json"`
    
}

type BatchGetChannelResponse struct {
    BatchGetChannelResponse *shared.BatchGetChannelResponse 
    ContentType string 
    StatusCode int64 
    
}

