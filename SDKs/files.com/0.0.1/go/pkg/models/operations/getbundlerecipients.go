package operations

import (
"openapi/pkg/models/shared")

type GetBundleRecipientsQueryParams struct {
    BundleID int32 `queryParam:"style=form,explode=true,name=bundle_id"`
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Filter map[string]interface{} `queryParam:"style=form,explode=true,name=filter"`
    FilterGt map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gt"`
    FilterGteq map[string]interface{} `queryParam:"style=form,explode=true,name=filter_gteq"`
    FilterLike map[string]interface{} `queryParam:"style=form,explode=true,name=filter_like"`
    FilterLt map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lt"`
    FilterLteq map[string]interface{} `queryParam:"style=form,explode=true,name=filter_lteq"`
    PerPage *int32 `queryParam:"style=form,explode=true,name=per_page"`
    SortBy map[string]interface{} `queryParam:"style=form,explode=true,name=sort_by"`
    UserID *int32 `queryParam:"style=form,explode=true,name=user_id"`
    
}

type GetBundleRecipientsRequest struct {
    QueryParams GetBundleRecipientsQueryParams 
    
}

type GetBundleRecipientsResponse struct {
    BundleRecipientEntities []shared.BundleRecipientEntity 
    ContentType string 
    StatusCode int64 
    
}

