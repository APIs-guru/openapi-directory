package operations

import (
"openapi/pkg/models/shared")

type GetRecipeRecipeIDReviewPathParams struct {
    RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
    
}

type GetRecipeRecipeIDReviewRequest struct {
    PathParams GetRecipeRecipeIDReviewPathParams 
    
}

type GetRecipeRecipeIDReviewResponse struct {
    BigOvenModelAPIReview *shared.BigOvenModelAPIReview 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

