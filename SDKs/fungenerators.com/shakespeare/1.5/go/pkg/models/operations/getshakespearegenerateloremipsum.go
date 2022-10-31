package operations

import (
"openapi/pkg/models/shared")

type GetShakespeareGenerateLoremIpsumQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Type *string `queryParam:"style=form,explode=true,name=type"`
    
}

type GetShakespeareGenerateLoremIpsumSecurity struct {
    XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetShakespeareGenerateLoremIpsumRequest struct {
    QueryParams GetShakespeareGenerateLoremIpsumQueryParams 
    Security GetShakespeareGenerateLoremIpsumSecurity 
    
}

type GetShakespeareGenerateLoremIpsumResponse struct {
    ContentType string 
    StatusCode int64 
    
}

