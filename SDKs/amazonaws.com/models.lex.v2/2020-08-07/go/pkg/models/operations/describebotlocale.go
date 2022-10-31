package operations

import (
"openapi/pkg/models/shared")

type DescribeBotLocalePathParams struct {
    BotID string `pathParam:"style=simple,explode=false,name=botId"`
    BotVersion string `pathParam:"style=simple,explode=false,name=botVersion"`
    LocaleID string `pathParam:"style=simple,explode=false,name=localeId"`
    
}

type DescribeBotLocaleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DescribeBotLocaleRequest struct {
    PathParams DescribeBotLocalePathParams 
    Headers DescribeBotLocaleHeaders 
    
}

type DescribeBotLocaleResponse struct {
    ContentType string 
    DescribeBotLocaleResponse *shared.DescribeBotLocaleResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

