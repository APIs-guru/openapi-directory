package operations

import (
"openapi/pkg/models/shared")

type ReviewGetReviewsPathParams struct {
    RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
    
}

type ReviewGetReviewsQueryParams struct {
    Pg *int32 `queryParam:"style=form,explode=true,name=pg"`
    Rpp *int32 `queryParam:"style=form,explode=true,name=rpp"`
    
}

type ReviewGetReviewsRequest struct {
    PathParams ReviewGetReviewsPathParams 
    QueryParams ReviewGetReviewsQueryParams 
    
}

type ReviewGetReviewsResponse struct {
    BigOvenModelAPIReviews []shared.BigOvenModelAPIReview 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

