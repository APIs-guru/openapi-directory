package operations

import (
"openapi/pkg/models/shared")

type RecipeGetRecipeWithStepsPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type RecipeGetRecipeWithStepsQueryParams struct {
    Prefetch *bool `queryParam:"style=form,explode=true,name=prefetch"`
    
}

type RecipeGetRecipeWithStepsRequest struct {
    PathParams RecipeGetRecipeWithStepsPathParams 
    QueryParams RecipeGetRecipeWithStepsQueryParams 
    
}

type RecipeGetRecipeWithStepsResponse struct {
    BigOvenModelApi2Recipe *shared.BigOvenModelApi2Recipe 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

