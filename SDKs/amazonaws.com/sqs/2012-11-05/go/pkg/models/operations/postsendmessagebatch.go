package operations

type PostSendMessageBatchActionEnum string

const (
	PostSendMessageBatchActionEnumSendMessageBatch PostSendMessageBatchActionEnum = "SendMessageBatch"
)

type PostSendMessageBatchVersionEnum string

const (
	PostSendMessageBatchVersionEnumTwoThousandAndTwelve1105 PostSendMessageBatchVersionEnum = "2012-11-05"
)

type PostSendMessageBatchQueryParams struct {
	Action  PostSendMessageBatchActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSendMessageBatchVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSendMessageBatchHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostSendMessageBatchRequest struct {
	QueryParams PostSendMessageBatchQueryParams
	Headers     PostSendMessageBatchHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSendMessageBatchResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
