package operations

type PostChangeMessageVisibilityBatchActionEnum string

const (
	PostChangeMessageVisibilityBatchActionEnumChangeMessageVisibilityBatch PostChangeMessageVisibilityBatchActionEnum = "ChangeMessageVisibilityBatch"
)

type PostChangeMessageVisibilityBatchVersionEnum string

const (
	PostChangeMessageVisibilityBatchVersionEnumTwoThousandAndTwelve1105 PostChangeMessageVisibilityBatchVersionEnum = "2012-11-05"
)

type PostChangeMessageVisibilityBatchQueryParams struct {
	Action  PostChangeMessageVisibilityBatchActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostChangeMessageVisibilityBatchVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostChangeMessageVisibilityBatchHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostChangeMessageVisibilityBatchRequest struct {
	QueryParams PostChangeMessageVisibilityBatchQueryParams
	Headers     PostChangeMessageVisibilityBatchHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostChangeMessageVisibilityBatchResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
