package operations

import (
"openapi/pkg/models/shared")

type GetPirateGenerateInsultQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type GetPirateGenerateInsultSecurity struct {
    XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetPirateGenerateInsultRequest struct {
    QueryParams GetPirateGenerateInsultQueryParams 
    Security GetPirateGenerateInsultSecurity 
    
}

type GetPirateGenerateInsultResponse struct {
    ContentType string 
    StatusCode int64 
    
}

