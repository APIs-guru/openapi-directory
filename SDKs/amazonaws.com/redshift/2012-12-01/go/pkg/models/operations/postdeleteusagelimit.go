package operations

type PostDeleteUsageLimitActionEnum string

const (
	PostDeleteUsageLimitActionEnumDeleteUsageLimit PostDeleteUsageLimitActionEnum = "DeleteUsageLimit"
)

type PostDeleteUsageLimitVersionEnum string

const (
	PostDeleteUsageLimitVersionEnumTwoThousandAndTwelve1201 PostDeleteUsageLimitVersionEnum = "2012-12-01"
)

type PostDeleteUsageLimitQueryParams struct {
	Action  PostDeleteUsageLimitActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteUsageLimitVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteUsageLimitHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteUsageLimitRequest struct {
	QueryParams PostDeleteUsageLimitQueryParams
	Headers     PostDeleteUsageLimitHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteUsageLimitResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
