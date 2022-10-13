package operations

type PostCreateUsageLimitActionEnum string

const (
	PostCreateUsageLimitActionEnumCreateUsageLimit PostCreateUsageLimitActionEnum = "CreateUsageLimit"
)

type PostCreateUsageLimitVersionEnum string

const (
	PostCreateUsageLimitVersionEnumTwoThousandAndTwelve1201 PostCreateUsageLimitVersionEnum = "2012-12-01"
)

type PostCreateUsageLimitQueryParams struct {
	Action  PostCreateUsageLimitActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateUsageLimitVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateUsageLimitHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateUsageLimitRequest struct {
	QueryParams PostCreateUsageLimitQueryParams
	Headers     PostCreateUsageLimitHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateUsageLimitResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
