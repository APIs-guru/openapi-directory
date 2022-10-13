package operations

type GetDescribeClusterSecurityGroupsActionEnum string

const (
	GetDescribeClusterSecurityGroupsActionEnumDescribeClusterSecurityGroups GetDescribeClusterSecurityGroupsActionEnum = "DescribeClusterSecurityGroups"
)

type GetDescribeClusterSecurityGroupsVersionEnum string

const (
	GetDescribeClusterSecurityGroupsVersionEnumTwoThousandAndTwelve1201 GetDescribeClusterSecurityGroupsVersionEnum = "2012-12-01"
)

type GetDescribeClusterSecurityGroupsQueryParams struct {
	Action                   GetDescribeClusterSecurityGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterSecurityGroupName *string                                     `queryParam:"style=form,explode=true,name=ClusterSecurityGroupName"`
	Marker                   *string                                     `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords               *int64                                      `queryParam:"style=form,explode=true,name=MaxRecords"`
	TagKeys                  []string                                    `queryParam:"style=form,explode=true,name=TagKeys"`
	TagValues                []string                                    `queryParam:"style=form,explode=true,name=TagValues"`
	Version                  GetDescribeClusterSecurityGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeClusterSecurityGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeClusterSecurityGroupsRequest struct {
	QueryParams GetDescribeClusterSecurityGroupsQueryParams
	Headers     GetDescribeClusterSecurityGroupsHeaders
}

type GetDescribeClusterSecurityGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
