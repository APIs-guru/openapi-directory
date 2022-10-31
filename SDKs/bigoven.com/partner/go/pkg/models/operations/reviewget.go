package operations

import (
"openapi/pkg/models/shared")

type ReviewGetPathParams struct {
    RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
    ReviewID int32 `pathParam:"style=simple,explode=false,name=reviewId"`
    
}

type ReviewGetRequest struct {
    PathParams ReviewGetPathParams 
    
}

type ReviewGetResponse struct {
    BigOvenModelAPIReview *shared.BigOvenModelAPIReview 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

