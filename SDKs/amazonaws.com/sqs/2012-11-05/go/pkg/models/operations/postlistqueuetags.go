package operations

type PostListQueueTagsActionEnum string

const (
	PostListQueueTagsActionEnumListQueueTags PostListQueueTagsActionEnum = "ListQueueTags"
)

type PostListQueueTagsVersionEnum string

const (
	PostListQueueTagsVersionEnumTwoThousandAndTwelve1105 PostListQueueTagsVersionEnum = "2012-11-05"
)

type PostListQueueTagsQueryParams struct {
	Action  PostListQueueTagsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListQueueTagsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListQueueTagsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListQueueTagsRequest struct {
	QueryParams PostListQueueTagsQueryParams
	Headers     PostListQueueTagsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListQueueTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
