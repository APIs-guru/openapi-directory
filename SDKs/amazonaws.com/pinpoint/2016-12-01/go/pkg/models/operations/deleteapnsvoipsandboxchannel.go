package operations

import (
"openapi/pkg/models/shared")

type DeleteApnsVoipSandboxChannelPathParams struct {
    ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
    
}

type DeleteApnsVoipSandboxChannelHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteApnsVoipSandboxChannelRequest struct {
    PathParams DeleteApnsVoipSandboxChannelPathParams 
    Headers DeleteApnsVoipSandboxChannelHeaders 
    
}

type DeleteApnsVoipSandboxChannelResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    DeleteApnsVoipSandboxChannelResponse *shared.DeleteApnsVoipSandboxChannelResponse 
    ForbiddenException *interface{} 
    InternalServerErrorException *interface{} 
    MethodNotAllowedException *interface{} 
    NotFoundException *interface{} 
    PayloadTooLargeException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

