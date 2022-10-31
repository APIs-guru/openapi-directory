package operations

import (
"openapi/pkg/models/shared")

type ReviewPutPathParams struct {
    ReviewID string `pathParam:"style=simple,explode=false,name=reviewId"`
    
}

type ReviewPutRequests struct {
    Api2ControllersWebAPIReviewControllerReviewRequest *shared.Api2ControllersWebAPIReviewControllerReviewRequest `request:"mediaType=application/json"`
    Api2ControllersWebAPIReviewControllerReviewRequest1 *shared.Api2ControllersWebAPIReviewControllerReviewRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Api2ControllersWebAPIReviewControllerReviewRequest2 *shared.Api2ControllersWebAPIReviewControllerReviewRequest `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type ReviewPutRequest struct {
    PathParams ReviewPutPathParams 
    Request ReviewPutRequests 
    
}

type ReviewPutResponse struct {
    BigOvenModelAPIReview *shared.BigOvenModelAPIReview 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

