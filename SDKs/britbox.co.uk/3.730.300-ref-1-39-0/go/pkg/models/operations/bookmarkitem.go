package operations

import (
"openapi/pkg/models/shared")

type BookmarkItemPathParams struct {
    ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
    
}

type BookmarkItemQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type BookmarkItemSecurity struct {
    ProfileAuth shared.SchemeProfileAuth `security:"scheme,type=oauth2"`
    
}

type BookmarkItemRequest struct {
    PathParams BookmarkItemPathParams 
    QueryParams BookmarkItemQueryParams 
    Security BookmarkItemSecurity 
    
}

type BookmarkItemResponse struct {
    Bookmark *shared.Bookmark 
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

