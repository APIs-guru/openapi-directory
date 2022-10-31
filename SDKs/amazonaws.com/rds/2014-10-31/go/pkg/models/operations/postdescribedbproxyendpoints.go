package operations

type PostDescribeDbProxyEndpointsActionEnum string

const (
	PostDescribeDbProxyEndpointsActionEnumDescribeDbProxyEndpoints PostDescribeDbProxyEndpointsActionEnum = "DescribeDBProxyEndpoints"
)

type PostDescribeDbProxyEndpointsVersionEnum string

const (
	PostDescribeDbProxyEndpointsVersionEnumTwoThousandAndFourteen1031 PostDescribeDbProxyEndpointsVersionEnum = "2014-10-31"
)

type PostDescribeDbProxyEndpointsQueryParams struct {
	Action     PostDescribeDbProxyEndpointsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                 `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                 `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDbProxyEndpointsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbProxyEndpointsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeDbProxyEndpointsRequest struct {
	QueryParams PostDescribeDbProxyEndpointsQueryParams
	Headers     PostDescribeDbProxyEndpointsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbProxyEndpointsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
