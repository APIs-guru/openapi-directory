package operations

type PostDescribeClusterVersionsActionEnum string

const (
	PostDescribeClusterVersionsActionEnumDescribeClusterVersions PostDescribeClusterVersionsActionEnum = "DescribeClusterVersions"
)

type PostDescribeClusterVersionsVersionEnum string

const (
	PostDescribeClusterVersionsVersionEnumTwoThousandAndTwelve1201 PostDescribeClusterVersionsVersionEnum = "2012-12-01"
)

type PostDescribeClusterVersionsQueryParams struct {
	Action     PostDescribeClusterVersionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeClusterVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeClusterVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeClusterVersionsRequest struct {
	QueryParams PostDescribeClusterVersionsQueryParams
	Headers     PostDescribeClusterVersionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeClusterVersionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
