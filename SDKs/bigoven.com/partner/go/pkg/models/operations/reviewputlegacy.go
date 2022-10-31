package operations

import (
"openapi/pkg/models/shared")

type ReviewPutLegacyPathParams struct {
    RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
    ReviewID int32 `pathParam:"style=simple,explode=false,name=reviewId"`
    
}

type ReviewPutLegacyRequests struct {
    Api2ControllersWebAPIReviewControllerReviewRequestLegacy *shared.Api2ControllersWebAPIReviewControllerReviewRequestLegacy `request:"mediaType=application/json"`
    Api2ControllersWebAPIReviewControllerReviewRequestLegacy1 *shared.Api2ControllersWebAPIReviewControllerReviewRequestLegacy `request:"mediaType=application/x-www-form-urlencoded"`
    Api2ControllersWebAPIReviewControllerReviewRequestLegacy2 *shared.Api2ControllersWebAPIReviewControllerReviewRequestLegacy `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type ReviewPutLegacyRequest struct {
    PathParams ReviewPutLegacyPathParams 
    Request ReviewPutLegacyRequests 
    
}

type ReviewPutLegacyResponse struct {
    BigOvenModelAPIReview *shared.BigOvenModelAPIReview 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

