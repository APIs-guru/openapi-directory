package operations

import (
"openapi/pkg/models/shared")

type DeleteFactQueryParams struct {
    ID string `queryParam:"style=form,explode=true,name=id"`
    
}

type DeleteFactSecurity struct {
    XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteFactRequest struct {
    QueryParams DeleteFactQueryParams 
    Security DeleteFactSecurity 
    
}

type DeleteFactResponse struct {
    ContentType string 
    StatusCode int64 
    
}

