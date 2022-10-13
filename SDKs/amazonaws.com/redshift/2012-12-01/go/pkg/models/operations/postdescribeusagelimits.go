package operations

type PostDescribeUsageLimitsActionEnum string

const (
	PostDescribeUsageLimitsActionEnumDescribeUsageLimits PostDescribeUsageLimitsActionEnum = "DescribeUsageLimits"
)

type PostDescribeUsageLimitsVersionEnum string

const (
	PostDescribeUsageLimitsVersionEnumTwoThousandAndTwelve1201 PostDescribeUsageLimitsVersionEnum = "2012-12-01"
)

type PostDescribeUsageLimitsQueryParams struct {
	Action     PostDescribeUsageLimitsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                            `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                            `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeUsageLimitsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeUsageLimitsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeUsageLimitsRequest struct {
	QueryParams PostDescribeUsageLimitsQueryParams
	Headers     PostDescribeUsageLimitsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeUsageLimitsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
