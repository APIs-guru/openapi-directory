package operations

import (
"openapi/pkg/models/shared")

type RecipeGetV2PathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type RecipeGetV2QueryParams struct {
    Prefetch *bool `queryParam:"style=form,explode=true,name=prefetch"`
    
}

type RecipeGetV2Request struct {
    PathParams RecipeGetV2PathParams 
    QueryParams RecipeGetV2QueryParams 
    
}

type RecipeGetV2Response struct {
    Api2ModelsRecipesRecipeResponse *shared.Api2ModelsRecipesRecipeResponse 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

