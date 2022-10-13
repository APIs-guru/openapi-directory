package operations

type GetDescribeDbParameterGroupsActionEnum string

const (
	GetDescribeDbParameterGroupsActionEnumDescribeDbParameterGroups GetDescribeDbParameterGroupsActionEnum = "DescribeDBParameterGroups"
)

type GetDescribeDbParameterGroupsVersionEnum string

const (
	GetDescribeDbParameterGroupsVersionEnumTwoThousandAndThirteen0212 GetDescribeDbParameterGroupsVersionEnum = "2013-02-12"
)

type GetDescribeDbParameterGroupsQueryParams struct {
	Action               GetDescribeDbParameterGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbParameterGroupName *string                                 `queryParam:"style=form,explode=true,name=DBParameterGroupName"`
	Marker               *string                                 `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords           *int64                                  `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version              GetDescribeDbParameterGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDbParameterGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
