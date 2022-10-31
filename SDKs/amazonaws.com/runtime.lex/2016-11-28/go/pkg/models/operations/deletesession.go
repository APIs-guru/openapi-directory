package operations

import (
"openapi/pkg/models/shared")

type DeleteSessionPathParams struct {
    BotAlias string `pathParam:"style=simple,explode=false,name=botAlias"`
    BotName string `pathParam:"style=simple,explode=false,name=botName"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type DeleteSessionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteSessionRequest struct {
    PathParams DeleteSessionPathParams 
    Headers DeleteSessionHeaders 
    
}

type DeleteSessionResponse struct {
    BadRequestException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    DeleteSessionResponse *shared.DeleteSessionResponse 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

