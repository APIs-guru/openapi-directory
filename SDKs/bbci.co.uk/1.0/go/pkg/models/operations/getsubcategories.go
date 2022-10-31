package operations

import (
"openapi/pkg/models/shared")

type GetSubCategoriesPathParams struct {
    Category string `pathParam:"style=simple,explode=false,name=category"`
    
}

type GetSubCategoriesQueryParams struct {
    Lang shared.LangEnum `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetSubCategoriesRequest struct {
    PathParams GetSubCategoriesPathParams 
    QueryParams GetSubCategoriesQueryParams 
    
}

type GetSubCategoriesResponse struct {
    ContentType string 
    StatusCode int64 
    Ibl *interface{} 
    
}

