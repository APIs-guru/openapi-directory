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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
