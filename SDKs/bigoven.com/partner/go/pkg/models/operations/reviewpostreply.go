package operations

import (
	"openapi/pkg/models/shared"
)

type ReviewPostReplyPathParams struct {
	ReviewID string `pathParam:"style=simple,explode=false,name=reviewId"`
}

type ReviewPostReplyRequests struct {
	Api2ControllersWebAPIReviewControllerPostReplyReq  *shared.Api2ControllersWebAPIReviewControllerPostReplyReq `request:"mediaType=application/json"`
	Api2ControllersWebAPIReviewControllerPostReplyReq1 *shared.Api2ControllersWebAPIReviewControllerPostReplyReq `request:"mediaType=application/x-www-form-urlencoded"`
	Api2ControllersWebAPIReviewControllerPostReplyReq2 *shared.Api2ControllersWebAPIReviewControllerPostReplyReq `request:"mediaType=text/json"`
	ApplicationXML                                     []byte                                                    `request:"mediaType=application/xml"`
	TextXML                                            []byte                                                    `request:"mediaType=text/xml"`
}

type ReviewPostReplyRequest struct {
	PathParams ReviewPostReplyPathParams
	Request    ReviewPostReplyRequests
}

type ReviewPostReplyResponse struct {
	BigOvenModelAPIReply *shared.BigOvenModelAPIReply
	Body                 []byte
	ContentType          string
	StatusCode           int64
}
