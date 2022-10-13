package operations

type PostListMetricStreamsActionEnum string

const (
	PostListMetricStreamsActionEnumListMetricStreams PostListMetricStreamsActionEnum = "ListMetricStreams"
)

type PostListMetricStreamsVersionEnum string

const (
	PostListMetricStreamsVersionEnumTwoThousandAndTen0801 PostListMetricStreamsVersionEnum = "2010-08-01"
)

type PostListMetricStreamsQueryParams struct {
	Action     PostListMetricStreamsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                          `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                          `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostListMetricStreamsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListMetricStreamsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListMetricStreamsRequest struct {
	QueryParams PostListMetricStreamsQueryParams
	Headers     PostListMetricStreamsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListMetricStreamsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
