package operations

import (
"openapi/pkg/models/shared")

type GetRecipeReviewReviewIDPathParams struct {
    ReviewID string `pathParam:"style=simple,explode=false,name=reviewId"`
    
}

type GetRecipeReviewReviewIDRequest struct {
    PathParams GetRecipeReviewReviewIDPathParams 
    
}

type GetRecipeReviewReviewIDResponse struct {
    BigOvenModelAPIReview *shared.BigOvenModelAPIReview 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

