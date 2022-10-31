package operations

import (
"openapi/pkg/models/shared")

type GetFactFodCategoriesSecurity struct {
    XFungeneratorsAPISecret shared.SchemeXFungeneratorsAPISecret `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetFactFodCategoriesRequest struct {
    Security GetFactFodCategoriesSecurity 
    
}

type GetFactFodCategoriesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

