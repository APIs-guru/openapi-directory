package operations

import (
"openapi/pkg/models/shared")

type GetListPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetListQueryParams struct {
    Device *string `queryParam:"style=form,explode=true,name=device"`
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    ItemType *shared.ItemTypeEnum `queryParam:"style=form,explode=true,name=item_type"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    MaxRating *string `queryParam:"style=form,explode=true,name=max_rating"`
    Order *shared.ListOrderEnum `queryParam:"style=form,explode=true,name=order"`
    OrderBy *shared.ListOrderByEnum `queryParam:"style=form,explode=true,name=order_by"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=page_size"`
    Param *string `queryParam:"style=form,explode=true,name=param"`
    Segments []string `queryParam:"style=form,explode=false,name=segments"`
    Sub *string `queryParam:"style=form,explode=true,name=sub"`
    
}

type GetListRequest struct {
    PathParams GetListPathParams 
    QueryParams GetListQueryParams 
    
}

type GetListResponse struct {
    ContentType string 
    ItemList *shared.ItemList 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

