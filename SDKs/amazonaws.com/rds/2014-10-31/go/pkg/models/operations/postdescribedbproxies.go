package operations

type PostDescribeDbProxiesActionEnum string

const (
	PostDescribeDbProxiesActionEnumDescribeDbProxies PostDescribeDbProxiesActionEnum = "DescribeDBProxies"
)

type PostDescribeDbProxiesVersionEnum string

const (
	PostDescribeDbProxiesVersionEnumTwoThousandAndFourteen1031 PostDescribeDbProxiesVersionEnum = "2014-10-31"
)

type PostDescribeDbProxiesQueryParams struct {
	Action     PostDescribeDbProxiesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                          `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                          `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDbProxiesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbProxiesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeDbProxiesRequest struct {
	QueryParams PostDescribeDbProxiesQueryParams
	Headers     PostDescribeDbProxiesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbProxiesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
