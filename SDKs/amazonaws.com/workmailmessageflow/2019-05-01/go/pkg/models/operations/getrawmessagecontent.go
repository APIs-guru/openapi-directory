package operations

import (
"openapi/pkg/models/shared")

type GetRawMessageContentPathParams struct {
    MessageID string `pathParam:"style=simple,explode=false,name=messageId"`
    
}

type GetRawMessageContentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRawMessageContentRequest struct {
    PathParams GetRawMessageContentPathParams 
    Headers GetRawMessageContentHeaders 
    
}

type GetRawMessageContentResponse struct {
    ContentType string 
    GetRawMessageContentResponse *shared.GetRawMessageContentResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

