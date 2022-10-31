package operations

import (
"openapi/pkg/models/shared")

type PutRiddleQueryParams struct {
    Answer string `queryParam:"style=form,explode=true,name=answer"`
    Category string `queryParam:"style=form,explode=true,name=category"`
    Question string `queryParam:"style=form,explode=true,name=question"`
    
}

type PutRiddleSecurity struct {
    XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type PutRiddleRequest struct {
    QueryParams PutRiddleQueryParams 
    Security PutRiddleSecurity 
    
}

type PutRiddleResponse struct {
    ContentType string 
    StatusCode int64 
    
}

