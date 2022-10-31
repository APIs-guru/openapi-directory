package operations

import (
"openapi/pkg/models/shared")

type DeleteBotVersionPathParams struct {
    BotID string `pathParam:"style=simple,explode=false,name=botId"`
    BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
    
}

type DeleteBotVersionQueryParams struct {
    SkipResourceInUseCheck *bool `queryParam:"style=form,explode=true,name=skipResourceInUseCheck"`
    
}

type DeleteBotVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteBotVersionRequest struct {
    PathParams DeleteBotVersionPathParams 
    QueryParams DeleteBotVersionQueryParams 
    Headers DeleteBotVersionHeaders 
    
}

type DeleteBotVersionResponse struct {
    ConflictException *interface{} 
    ContentType string 
    DeleteBotVersionResponse *shared.DeleteBotVersionResponse 
    InternalServerException *interface{} 
    PreconditionFailedException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

