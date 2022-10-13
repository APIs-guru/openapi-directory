package operations

import (
	"openapi/pkg/models/shared"
)

type ReviewPostPathParams struct {
	RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
}

type ReviewPostRequests struct {
	Api2ControllersWebAPIReviewControllerReviewRequest  *shared.Api2ControllersWebAPIReviewControllerReviewRequest `request:"mediaType=application/json"`
	Api2ControllersWebAPIReviewControllerReviewRequest1 *shared.Api2ControllersWebAPIReviewControllerReviewRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Api2ControllersWebAPIReviewControllerReviewRequest2 *shared.Api2ControllersWebAPIReviewControllerReviewRequest `request:"mediaType=text/json"`
	ApplicationXML                                      []byte                                                     `request:"mediaType=application/xml"`
	TextXML                                             []byte                                                     `request:"mediaType=text/xml"`
}

type ReviewPostRequest struct {
	PathParams ReviewPostPathParams
	Request    ReviewPostRequests
}

type ReviewPostResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	SystemObject map[string]interface{}
}
