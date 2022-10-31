package operations

import (
"openapi/pkg/models/shared")

type GetRiddleRandomQueryParams struct {
    Category *string `queryParam:"style=form,explode=true,name=category"`
    
}

type GetRiddleRandomSecurity struct {
    XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRiddleRandomRequest struct {
    QueryParams GetRiddleRandomQueryParams 
    Security GetRiddleRandomSecurity 
    
}

type GetRiddleRandomResponse struct {
    ContentType string 
    StatusCode int64 
    
}

