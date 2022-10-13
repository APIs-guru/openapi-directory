package operations

type ReviewDeleteReplyPathParams struct {
	ReplyID string `pathParam:"style=simple,explode=false,name=replyId"`
}

type ReviewDeleteReplyRequest struct {
	PathParams ReviewDeleteReplyPathParams
}

type ReviewDeleteReplyResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	SystemObject map[string]interface{}
}
