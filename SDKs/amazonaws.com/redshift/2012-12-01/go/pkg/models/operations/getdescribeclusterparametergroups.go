package operations

type GetDescribeClusterParameterGroupsActionEnum string

const (
	GetDescribeClusterParameterGroupsActionEnumDescribeClusterParameterGroups GetDescribeClusterParameterGroupsActionEnum = "DescribeClusterParameterGroups"
)

type GetDescribeClusterParameterGroupsVersionEnum string

const (
	GetDescribeClusterParameterGroupsVersionEnumTwoThousandAndTwelve1201 GetDescribeClusterParameterGroupsVersionEnum = "2012-12-01"
)

type GetDescribeClusterParameterGroupsQueryParams struct {
	Action             GetDescribeClusterParameterGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker             *string                                      `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords         *int64                                       `queryParam:"style=form,explode=true,name=MaxRecords"`
	ParameterGroupName *string                                      `queryParam:"style=form,explode=true,name=ParameterGroupName"`
	TagKeys            []string                                     `queryParam:"style=form,explode=true,name=TagKeys"`
	TagValues          []string                                     `queryParam:"style=form,explode=true,name=TagValues"`
	Version            GetDescribeClusterParameterGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeClusterParameterGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeClusterParameterGroupsRequest struct {
	QueryParams GetDescribeClusterParameterGroupsQueryParams
	Headers     GetDescribeClusterParameterGroupsHeaders
}

type GetDescribeClusterParameterGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
