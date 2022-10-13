package operations

type PostDescribeDbInstancesActionEnum string

const (
	PostDescribeDbInstancesActionEnumDescribeDbInstances PostDescribeDbInstancesActionEnum = "DescribeDBInstances"
)

type PostDescribeDbInstancesVersionEnum string

const (
	PostDescribeDbInstancesVersionEnumTwoThousandAndFourteen0901 PostDescribeDbInstancesVersionEnum = "2014-09-01"
)

type PostDescribeDbInstancesQueryParams struct {
	Action  PostDescribeDbInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeDbInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
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
