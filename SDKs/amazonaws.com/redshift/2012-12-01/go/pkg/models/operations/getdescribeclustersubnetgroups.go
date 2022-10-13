package operations

type GetDescribeClusterSubnetGroupsActionEnum string

const (
	GetDescribeClusterSubnetGroupsActionEnumDescribeClusterSubnetGroups GetDescribeClusterSubnetGroupsActionEnum = "DescribeClusterSubnetGroups"
)

type GetDescribeClusterSubnetGroupsVersionEnum string

const (
	GetDescribeClusterSubnetGroupsVersionEnumTwoThousandAndTwelve1201 GetDescribeClusterSubnetGroupsVersionEnum = "2012-12-01"
)

type GetDescribeClusterSubnetGroupsQueryParams struct {
	Action                 GetDescribeClusterSubnetGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterSubnetGroupName *string                                   `queryParam:"style=form,explode=true,name=ClusterSubnetGroupName"`
	Marker                 *string                                   `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords             *int64                                    `queryParam:"style=form,explode=true,name=MaxRecords"`
	TagKeys                []string                                  `queryParam:"style=form,explode=true,name=TagKeys"`
	TagValues              []string                                  `queryParam:"style=form,explode=true,name=TagValues"`
	Version                GetDescribeClusterSubnetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeClusterSubnetGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeClusterSubnetGroupsRequest struct {
	QueryParams GetDescribeClusterSubnetGroupsQueryParams
	Headers     GetDescribeClusterSubnetGroupsHeaders
}

type GetDescribeClusterSubnetGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
