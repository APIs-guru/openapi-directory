package operations

import (
"openapi/pkg/models/shared")

type GetMessageReactionsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetMessageReactionsIDRequest struct {
    PathParams GetMessageReactionsIDPathParams 
    
}

type GetMessageReactionsIDResponse struct {
    ContentType string 
    MessageReactionEntity *shared.MessageReactionEntity 
    StatusCode int64 
    
}

