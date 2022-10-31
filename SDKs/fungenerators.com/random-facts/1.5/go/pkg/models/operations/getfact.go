package operations

import (
"openapi/pkg/models/shared")

type GetFactQueryParams struct {
    ID *string `queryParam:"style=form,explode=true,name=id"`
    
}

type GetFactSecurity struct {
    XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetFactRequest struct {
    QueryParams GetFactQueryParams 
    Security GetFactSecurity 
    
}

type GetFactResponse struct {
    ContentType string 
    StatusCode int64 
    
}

