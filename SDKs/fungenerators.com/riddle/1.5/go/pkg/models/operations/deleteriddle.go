package operations

import (
"openapi/pkg/models/shared")

type DeleteRiddleQueryParams struct {
    ID string `queryParam:"style=form,explode=true,name=id"`
    
}

type DeleteRiddleSecurity struct {
    XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type DeleteRiddleRequest struct {
    QueryParams DeleteRiddleQueryParams 
    Security DeleteRiddleSecurity 
    
}

type DeleteRiddleResponse struct {
    ContentType string 
    StatusCode int64 
    
}

