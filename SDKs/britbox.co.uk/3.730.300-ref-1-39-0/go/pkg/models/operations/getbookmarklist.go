package operations

import (
"openapi/pkg/models/shared")

type GetBookmarkListQueryParams struct {
    Device *string `queryParam:"style=form,explode=true,name=device"`
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    ItemType *shared.ItemTypeEnum `queryParam:"style=form,explode=true,name=item_type"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    Order *shared.ListOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=page_size"`
    Segments []string `queryParam:"style=form,explode=false,name=segments"`
    Sub *string `queryParam:"style=form,explode=true,name=sub"`
    
}

type GetBookmarkListSecurity struct {
    ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
    
}

type GetBookmarkListRequest struct {
    QueryParams GetBookmarkListQueryParams 
    Security GetBookmarkListSecurity 
    
}

type GetBookmarkListResponse struct {
    ContentType string 
    ItemList *shared.ItemList 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

