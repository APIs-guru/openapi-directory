package operations

import (
"openapi/pkg/models/shared")

type GetInboxRecipientsQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Filter map[string]interface{} `queryParam:"style=form,explode=true,name=filter"`
    FilterGt map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gt"`
    FilterGteq map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gteq"`
    FilterLike map[string]interface{} `queryParam:"style=form,explode=true,name=filter_like"`
    FilterLt map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lt"`
    FilterLteq map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lteq"`
    InboxID int32 `queryParam:"style=form,explode=true,name=inbox_id"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    SortBy map[string]interface{} `queryParam:"style=form,explode=true,name=sort_by"`
    UserID *int32 `queryParam:"style=form,explode=true,name=user_id"`
    
}

type GetInboxRecipientsRequest struct {
    QueryParams GetInboxRecipientsQueryParams 
    
}

type GetInboxRecipientsResponse struct {
    ContentType string 
    InboxRecipientEntities []shared.InboxRecipientEntity 
    StatusCode int64 
    
}

