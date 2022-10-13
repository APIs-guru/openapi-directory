package operations

type PostDescribeDbEngineVersionsActionEnum string

const (
	PostDescribeDbEngineVersionsActionEnumDescribeDbEngineVersions PostDescribeDbEngineVersionsActionEnum = "DescribeDBEngineVersions"
)

type PostDescribeDbEngineVersionsVersionEnum string

const (
	PostDescribeDbEngineVersionsVersionEnumTwoThousandAndThirteen0909 PostDescribeDbEngineVersionsVersionEnum = "2013-09-09"
)

type PostDescribeDbEngineVersionsQueryParams struct {
	Action     PostDescribeDbEngineVersionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                 `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                 `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDbEngineVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbEngineVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeDbEngineVersionsRequest struct {
	QueryParams PostDescribeDbEngineVersionsQueryParams
	Headers     PostDescribeDbEngineVersionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbEngineVersionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
