package operations

import (
"openapi/pkg/models/shared")

type RecipeGetActiveRecipeQueryParams struct {
    UserName string `queryParam:"style=form,explode=true,name=userName"`
    
}

type RecipeGetActiveRecipeRequest struct {
    QueryParams RecipeGetActiveRecipeQueryParams 
    
}

type RecipeGetActiveRecipeResponse struct {
    BigOvenResult *shared.BigOvenResult 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

