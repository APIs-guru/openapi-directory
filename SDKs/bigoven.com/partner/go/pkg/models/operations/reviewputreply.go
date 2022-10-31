package operations

import (
	"openapi/pkg/models/shared"
)

type ReviewPutReplyPathParams struct {
	ReplyID string `pathParam:"style=simple,explode=false,name=replyId"`
}

type ReviewPutReplyRequests struct {
	Api2ControllersWebAPIReviewControllerPostReplyReq  *shared.Api2ControllersWebAPIReviewControllerPostReplyReq `request:"mediaType=application/json"`
	Api2ControllersWebAPIReviewControllerPostReplyReq1 *shared.Api2ControllersWebAPIReviewControllerPostReplyReq `request:"mediaType=application/x-www-form-urlencoded"`
	Api2ControllersWebAPIReviewControllerPostReplyReq2 *shared.Api2ControllersWebAPIReviewControllerPostReplyReq `request:"mediaType=text/json"`
	ApplicationXML                                     []byte                                                    `request:"mediaType=application/xml"`
	TextXML                                            []byte                                                    `request:"mediaType=text/xml"`
}

type ReviewPutReplyRequest struct {
	PathParams ReviewPutReplyPathParams
	Request    ReviewPutReplyRequests
}

type ReviewPutReplyResponse struct {
	BigOvenModelAPIReply *shared.BigOvenModelAPIReply
	Body                 []byte
	ContentType          string
	StatusCode           int64
}
