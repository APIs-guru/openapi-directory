package operations

type GetDescribeReservedNodesActionEnum string

const (
	GetDescribeReservedNodesActionEnumDescribeReservedNodes GetDescribeReservedNodesActionEnum = "DescribeReservedNodes"
)

type GetDescribeReservedNodesVersionEnum string

const (
	GetDescribeReservedNodesVersionEnumTwoThousandAndTwelve1201 GetDescribeReservedNodesVersionEnum = "2012-12-01"
)

type GetDescribeReservedNodesQueryParams struct {
	Action         GetDescribeReservedNodesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker         *string                             `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords     *int64                              `queryParam:"style=form,explode=true,name=MaxRecords"`
	ReservedNodeID *string                             `queryParam:"style=form,explode=true,name=ReservedNodeId"`
	Version        GetDescribeReservedNodesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeReservedNodesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeReservedNodesRequest struct {
	QueryParams GetDescribeReservedNodesQueryParams
	Headers     GetDescribeReservedNodesHeaders
}

type GetDescribeReservedNodesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
