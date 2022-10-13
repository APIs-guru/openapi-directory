package operations

type PostV1OrderFeedbackActionEnum string

const (
	PostV1OrderFeedbackActionEnumApprove         PostV1OrderFeedbackActionEnum = "APPROVE"
	PostV1OrderFeedbackActionEnumReject          PostV1OrderFeedbackActionEnum = "REJECT"
	PostV1OrderFeedbackActionEnumRejectBlacklist PostV1OrderFeedbackActionEnum = "REJECT_BLACKLIST"
)

type PostV1OrderFeedbackFormatEnum string

const (
	PostV1OrderFeedbackFormatEnumJSON PostV1OrderFeedbackFormatEnum = "json"
	PostV1OrderFeedbackFormatEnumXML  PostV1OrderFeedbackFormatEnum = "xml"
)

type PostV1OrderFeedbackQueryParams struct {
	Action PostV1OrderFeedbackActionEnum  `queryParam:"style=form,explode=true,name=action"`
	Format *PostV1OrderFeedbackFormatEnum `queryParam:"style=form,explode=true,name=format"`
	ID     string                         `queryParam:"style=form,explode=true,name=id"`
	Key    string                         `queryParam:"style=form,explode=true,name=key"`
	Notes  *string                        `queryParam:"style=form,explode=true,name=notes"`
}

type PostV1OrderFeedbackRequest struct {
	QueryParams PostV1OrderFeedbackQueryParams
}

type PostV1OrderFeedbackResponse struct {
	ContentType                                 string
	PostV1OrderFeedback200ApplicationJSONString *string
	StatusCode                                  int64
}
