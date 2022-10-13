package operations

type PostDescribeClusterSubnetGroupsActionEnum string

const (
	PostDescribeClusterSubnetGroupsActionEnumDescribeClusterSubnetGroups PostDescribeClusterSubnetGroupsActionEnum = "DescribeClusterSubnetGroups"
)

type PostDescribeClusterSubnetGroupsVersionEnum string

const (
	PostDescribeClusterSubnetGroupsVersionEnumTwoThousandAndTwelve1201 PostDescribeClusterSubnetGroupsVersionEnum = "2012-12-01"
)

type PostDescribeClusterSubnetGroupsQueryParams struct {
	Action     PostDescribeClusterSubnetGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                    `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                    `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeClusterSubnetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeClusterSubnetGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeClusterSubnetGroupsRequest struct {
	QueryParams PostDescribeClusterSubnetGroupsQueryParams
	Headers     PostDescribeClusterSubnetGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeClusterSubnetGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
