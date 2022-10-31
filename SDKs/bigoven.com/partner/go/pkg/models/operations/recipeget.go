package operations

import (
"openapi/pkg/models/shared")

type RecipeGetPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type RecipeGetQueryParams struct {
    Prefetch *bool `queryParam:"style=form,explode=true,name=prefetch"`
    
}

type RecipeGetRequest struct {
    PathParams RecipeGetPathParams 
    QueryParams RecipeGetQueryParams 
    
}

type RecipeGetResponse struct {
    BigOvenModelApi2Recipe *shared.BigOvenModelApi2Recipe 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

