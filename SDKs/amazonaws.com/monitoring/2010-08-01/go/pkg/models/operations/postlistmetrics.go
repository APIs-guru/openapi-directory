package operations

type PostListMetricsActionEnum string

const (
	PostListMetricsActionEnumListMetrics PostListMetricsActionEnum = "ListMetrics"
)

type PostListMetricsVersionEnum string

const (
	PostListMetricsVersionEnumTwoThousandAndTen0801 PostListMetricsVersionEnum = "2010-08-01"
)

type PostListMetricsQueryParams struct {
	Action    PostListMetricsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	NextToken *string                    `queryParam:"style=form,explode=true,name=NextToken"`
	Version   PostListMetricsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostListMetricsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostListMetricsRequest struct {
	QueryParams PostListMetricsQueryParams
	Headers     PostListMetricsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostListMetricsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
