package operations

import (
"openapi/pkg/models/shared")

type GetRecommendedListQueryParams struct {
    Device *string `queryParam:"style=form,explode=true,name=device"`
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    ItemTypes []string `queryParam:"style=form,explode=false,name=item_types"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    Page *int32 `queryParam:"style=form,explode=true,name=page"`
    PageSize *int32 `queryParam:"style=form,explode=true,name=page_size"`
    Segments []string `queryParam:"style=form,explode=false,name=segments"`
    Sub *string `queryParam:"style=form,explode=true,name=sub"`
    
}

type GetRecommendedListSecurity struct {
    ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
    
}

type GetRecommendedListRequest struct {
    QueryParams GetRecommendedListQueryParams 
    Security GetRecommendedListSecurity 
    
}

type GetRecommendedListResponse struct {
    ContentType string 
    ItemList *shared.ItemList 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

