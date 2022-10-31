package operations

import (
"openapi/pkg/models/shared")

type GetShakespeareGenerateInsultQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type GetShakespeareGenerateInsultSecurity struct {
    XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetShakespeareGenerateInsultRequest struct {
    QueryParams GetShakespeareGenerateInsultQueryParams 
    Security GetShakespeareGenerateInsultSecurity 
    
}

type GetShakespeareGenerateInsultResponse struct {
    ContentType string 
    StatusCode int64 
    
}

