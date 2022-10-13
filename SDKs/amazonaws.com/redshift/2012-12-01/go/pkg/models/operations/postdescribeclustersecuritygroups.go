package operations

type PostDescribeClusterSecurityGroupsActionEnum string

const (
	PostDescribeClusterSecurityGroupsActionEnumDescribeClusterSecurityGroups PostDescribeClusterSecurityGroupsActionEnum = "DescribeClusterSecurityGroups"
)

type PostDescribeClusterSecurityGroupsVersionEnum string

const (
	PostDescribeClusterSecurityGroupsVersionEnumTwoThousandAndTwelve1201 PostDescribeClusterSecurityGroupsVersionEnum = "2012-12-01"
)

type PostDescribeClusterSecurityGroupsQueryParams struct {
	Action     PostDescribeClusterSecurityGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                      `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                      `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeClusterSecurityGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeClusterSecurityGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeClusterSecurityGroupsRequest struct {
	QueryParams PostDescribeClusterSecurityGroupsQueryParams
	Headers     PostDescribeClusterSecurityGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeClusterSecurityGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
