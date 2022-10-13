package operations

type PostModifyUsageLimitActionEnum string

const (
	PostModifyUsageLimitActionEnumModifyUsageLimit PostModifyUsageLimitActionEnum = "ModifyUsageLimit"
)

type PostModifyUsageLimitVersionEnum string

const (
	PostModifyUsageLimitVersionEnumTwoThousandAndTwelve1201 PostModifyUsageLimitVersionEnum = "2012-12-01"
)

type PostModifyUsageLimitQueryParams struct {
	Action  PostModifyUsageLimitActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyUsageLimitVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyUsageLimitHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyUsageLimitRequest struct {
	QueryParams PostModifyUsageLimitQueryParams
	Headers     PostModifyUsageLimitHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyUsageLimitResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
