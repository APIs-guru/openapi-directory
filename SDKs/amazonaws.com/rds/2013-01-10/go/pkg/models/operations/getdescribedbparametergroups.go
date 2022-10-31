package operations

type GetDescribeDbParameterGroupsActionEnum string

const (
	GetDescribeDbParameterGroupsActionEnumDescribeDbParameterGroups GetDescribeDbParameterGroupsActionEnum = "DescribeDBParameterGroups"
)

type GetDescribeDbParameterGroupsVersionEnum string

const (
	GetDescribeDbParameterGroupsVersionEnumTwoThousandAndThirteen0110 GetDescribeDbParameterGroupsVersionEnum = "2013-01-10"
)

type GetDescribeDbParameterGroupsQueryParams struct {
	Action               GetDescribeDbParameterGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbParameterGroupName *string                                 `queryParam:"style=form,explode=true,name=DBParameterGroupName"`
	Marker               *string                                 `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords           *int64                                  `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version              GetDescribeDbParameterGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDbParameterGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeDbParameterGroupsRequest struct {
	QueryParams GetDescribeDbParameterGroupsQueryParams
	Headers     GetDescribeDbParameterGroupsHeaders
}

type GetDescribeDbParameterGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
