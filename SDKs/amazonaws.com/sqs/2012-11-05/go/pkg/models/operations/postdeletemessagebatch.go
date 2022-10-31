package operations

type PostDeleteMessageBatchActionEnum string

const (
	PostDeleteMessageBatchActionEnumDeleteMessageBatch PostDeleteMessageBatchActionEnum = "DeleteMessageBatch"
)

type PostDeleteMessageBatchVersionEnum string

const (
	PostDeleteMessageBatchVersionEnumTwoThousandAndTwelve1105 PostDeleteMessageBatchVersionEnum = "2012-11-05"
)

type PostDeleteMessageBatchQueryParams struct {
	Action  PostDeleteMessageBatchActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteMessageBatchVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteMessageBatchHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteMessageBatchRequest struct {
	QueryParams PostDeleteMessageBatchQueryParams
	Headers     PostDeleteMessageBatchHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteMessageBatchResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
