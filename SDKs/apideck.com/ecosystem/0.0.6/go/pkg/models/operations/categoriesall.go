package operations

import (
"openapi/pkg/models/shared")

type CategoriesAllPathParams struct {
    EcosystemID string `pathParam:"style=simple,explode=false,name=ecosystem_id"`
    
}

type CategoriesAllQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type CategoriesAllRequest struct {
    PathParams CategoriesAllPathParams 
    QueryParams CategoriesAllQueryParams 
    
}

type CategoriesAllResponse struct {
    ContentType string 
    GetCategoriesResponse *shared.GetCategoriesResponse 
    StatusCode int64 
    
}

