package operations

import (
"openapi/pkg/models/shared")

type GetFactSearchQueryParams struct {
    Category *string `queryParam:"style=form,explode=true,name=category"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    Subcategory *string `queryParam:"style=form,explode=true,name=subcategory"`
    
}

type GetFactSearchSecurity struct {
    XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetFactSearchRequest struct {
    QueryParams GetFactSearchQueryParams 
    Security GetFactSearchSecurity 
    
}

type GetFactSearchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

