package operations

import (
"openapi/pkg/models/shared")

type GetUUIDQueryParams struct {
    Count *int64 `queryParam:"style=form,explode=true,name=count"`
    
}

type GetUUIDSecurity struct {
    XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetUUIDRequest struct {
    QueryParams GetUUIDQueryParams 
    Security GetUUIDSecurity 
    
}

type GetUUIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

