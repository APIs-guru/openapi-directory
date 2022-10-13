package operations

type PostDescribeDbInstancesActionEnum string

const (
	PostDescribeDbInstancesActionEnumDescribeDbInstances PostDescribeDbInstancesActionEnum = "DescribeDBInstances"
)

type PostDescribeDbInstancesVersionEnum string

const (
	PostDescribeDbInstancesVersionEnumTwoThousandAndThirteen0110 PostDescribeDbInstancesVersionEnum = "2013-01-10"
)

type PostDescribeDbInstancesQueryParams struct {
	Action     PostDescribeDbInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                            `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                            `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDbInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeDbInstancesRequest struct {
	QueryParams PostDescribeDbInstancesQueryParams
	Headers     PostDescribeDbInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
