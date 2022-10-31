package operations

import (
"openapi/pkg/models/shared")

type RecipeRavesQueryParams struct {
    Pg *int32 `queryParam:"style=form,explode=true,name=pg"`
    Rpp *int32 `queryParam:"style=form,explode=true,name=rpp"`
    
}

type RecipeRavesRequest struct {
    QueryParams RecipeRavesQueryParams 
    
}

type RecipeRavesResponse struct {
    BigOvenModelRecipeInfoReviewTuple2s []shared.BigOvenModelRecipeInfoReviewTuple2 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

