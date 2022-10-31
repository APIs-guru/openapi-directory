package operations

import (
"openapi/pkg/models/shared")

type GetListsQueryParams struct {
    Device *string `queryParam:"style=form,explode=true,name=device"`
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Ids []string `queryParam:"style=form,explode=false,name=ids"`
    ItemType *shared.ItemTypeEnum `queryParam:"style=form,explode=true,name=item_type"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    MaxRating *string `queryParam:"style=form,explode=true,name=max_rating"`
    Order *shared.ListOrderEnum `queryParam:"style=form,explode=true,name=order"`
    OrderBy *shared.ListOrderByEnum `queryParam:"style=form,explode=true,name=order_by"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=page_size"`
    Segments []string `queryParam:"style=form,explode=false,name=segments"`
    Sub *string `queryParam:"style=form,explode=true,name=sub"`
    
}

type GetListsRequest struct {
    QueryParams GetListsQueryParams 
    
}

type GetListsResponse struct {
    ContentType string 
    ItemLists []shared.ItemList 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

