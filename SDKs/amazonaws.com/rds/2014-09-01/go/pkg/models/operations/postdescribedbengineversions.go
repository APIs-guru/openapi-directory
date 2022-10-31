package operations

type PostDescribeDbEngineVersionsActionEnum string

const (
	PostDescribeDbEngineVersionsActionEnumDescribeDbEngineVersions PostDescribeDbEngineVersionsActionEnum = "DescribeDBEngineVersions"
)

type PostDescribeDbEngineVersionsVersionEnum string

const (
	PostDescribeDbEngineVersionsVersionEnumTwoThousandAndFourteen0901 PostDescribeDbEngineVersionsVersionEnum = "2014-09-01"
)

type PostDescribeDbEngineVersionsQueryParams struct {
	Action  PostDescribeDbEngineVersionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeDbEngineVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbEngineVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
