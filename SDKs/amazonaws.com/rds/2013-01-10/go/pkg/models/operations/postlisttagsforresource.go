package operations

type PostListTagsForResourceActionEnum string

const (
	PostListTagsForResourceActionEnumListTagsForResource PostListTagsForResourceActionEnum = "ListTagsForResource"
)

type PostListTagsForResourceVersionEnum string

const (
	PostListTagsForResourceVersionEnumTwoThousandAndThirteen0110 PostListTagsForResourceVersionEnum = "2013-01-10"
)

type PostListTagsForResourceQueryParams struct {
	Action  PostListTagsForResourceActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostListTagsForResourceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListTagsForResourceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListTagsForResourceRequest struct {
	QueryParams PostListTagsForResourceQueryParams
	Headers     PostListTagsForResourceHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListTagsForResourceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
