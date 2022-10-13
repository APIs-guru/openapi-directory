package operations

type GetListQueueTagsPathParams struct {
	AccountNumber int64  `pathParam:"style=simple,explode=false,name=AccountNumber"`
	QueueName     string `pathParam:"style=simple,explode=false,name=QueueName"`
}

type GetListQueueTagsActionEnum string

const (
	GetListQueueTagsActionEnumListQueueTags GetListQueueTagsActionEnum = "ListQueueTags"
)

type GetListQueueTagsVersionEnum string

const (
	GetListQueueTagsVersionEnumTwoThousandAndTwelve1105 GetListQueueTagsVersionEnum = "2012-11-05"
)

type GetListQueueTagsQueryParams struct {
	Action  GetListQueueTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetListQueueTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetListQueueTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetListQueueTagsRequest struct {
	PathParams  GetListQueueTagsPathParams
	QueryParams GetListQueueTagsQueryParams
	Headers     GetListQueueTagsHeaders
}

type GetListQueueTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
