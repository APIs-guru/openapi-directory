package operations

type PostDescribeReservedNodesActionEnum string

const (
	PostDescribeReservedNodesActionEnumDescribeReservedNodes PostDescribeReservedNodesActionEnum = "DescribeReservedNodes"
)

type PostDescribeReservedNodesVersionEnum string

const (
	PostDescribeReservedNodesVersionEnumTwoThousandAndTwelve1201 PostDescribeReservedNodesVersionEnum = "2012-12-01"
)

type PostDescribeReservedNodesQueryParams struct {
	Action     PostDescribeReservedNodesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                              `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                              `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeReservedNodesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeReservedNodesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeReservedNodesRequest struct {
	QueryParams PostDescribeReservedNodesQueryParams
	Headers     PostDescribeReservedNodesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeReservedNodesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
