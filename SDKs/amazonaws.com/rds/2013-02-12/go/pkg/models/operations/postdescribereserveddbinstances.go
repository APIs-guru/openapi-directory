package operations

type PostDescribeReservedDbInstancesActionEnum string

const (
	PostDescribeReservedDbInstancesActionEnumDescribeReservedDbInstances PostDescribeReservedDbInstancesActionEnum = "DescribeReservedDBInstances"
)

type PostDescribeReservedDbInstancesVersionEnum string

const (
	PostDescribeReservedDbInstancesVersionEnumTwoThousandAndThirteen0212 PostDescribeReservedDbInstancesVersionEnum = "2013-02-12"
)

type PostDescribeReservedDbInstancesQueryParams struct {
	Action     PostDescribeReservedDbInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                    `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                    `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeReservedDbInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeReservedDbInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeReservedDbInstancesRequest struct {
	QueryParams PostDescribeReservedDbInstancesQueryParams
	Headers     PostDescribeReservedDbInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeReservedDbInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
