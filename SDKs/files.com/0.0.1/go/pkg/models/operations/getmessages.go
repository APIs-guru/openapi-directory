package operations

import (
"openapi/pkg/models/shared")

type GetMessagesQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    ProjectID int32 `queryParam:"style=form,explode=true,name=project_id"`
    UserID *int32 `queryParam:"style=form,explode=true,name=user_id"`
    
}

type GetMessagesRequest struct {
    QueryParams GetMessagesQueryParams 
    
}

type GetMessagesResponse struct {
    ContentType string 
    MessageEntities []shared.MessageEntity 
    StatusCode int64 
    
}

