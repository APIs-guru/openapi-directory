package operations

import (
"openapi/pkg/models/shared")

type GetPirateTranslateQueryParams struct {
    Text string `queryParam:"style=form,explode=true,name=text"`
    
}

type GetPirateTranslateSecurity struct {
    XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetPirateTranslateRequest struct {
    QueryParams GetPirateTranslateQueryParams 
    Security GetPirateTranslateSecurity 
    
}

type GetPirateTranslateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

