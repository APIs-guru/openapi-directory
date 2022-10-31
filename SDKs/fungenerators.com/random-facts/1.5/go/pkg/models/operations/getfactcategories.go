package operations

import (
"openapi/pkg/models/shared")

type GetFactCategoriesQueryParams struct {
    Start *int64 `queryParam:"style=form,explode=true,name=start"`
    
}

type GetFactCategoriesSecurity struct {
    XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetFactCategoriesRequest struct {
    QueryParams GetFactCategoriesQueryParams 
    Security GetFactCategoriesSecurity 
    
}

type GetFactCategoriesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

