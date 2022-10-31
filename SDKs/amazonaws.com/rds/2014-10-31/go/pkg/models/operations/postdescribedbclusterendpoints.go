package operations

type PostDescribeDbClusterEndpointsActionEnum string

const (
	PostDescribeDbClusterEndpointsActionEnumDescribeDbClusterEndpoints PostDescribeDbClusterEndpointsActionEnum = "DescribeDBClusterEndpoints"
)

type PostDescribeDbClusterEndpointsVersionEnum string

const (
	PostDescribeDbClusterEndpointsVersionEnumTwoThousandAndFourteen1031 PostDescribeDbClusterEndpointsVersionEnum = "2014-10-31"
)

type PostDescribeDbClusterEndpointsQueryParams struct {
	Action     PostDescribeDbClusterEndpointsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                   `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                   `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDbClusterEndpointsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbClusterEndpointsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeDbClusterEndpointsRequest struct {
	QueryParams PostDescribeDbClusterEndpointsQueryParams
	Headers     PostDescribeDbClusterEndpointsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbClusterEndpointsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
