package operations

import (
"openapi/pkg/models/shared")

type GetMessageReactionsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    MessageID int32 `queryParam:"style=form,explode=true,name=message_id"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    UserID *int32 `queryParam:"style=form,explode=true,name=user_id"`
    
}

type GetMessageReactionsRequest struct {
    QueryParams GetMessageReactionsQueryParams 
    
}

type GetMessageReactionsResponse struct {
    ContentType string 
    MessageReactionEntities []shared.MessageReactionEntity 
    StatusCode int64 
    
}

