package operations

type GetDescribeDbSecurityGroupsActionEnum string

const (
	GetDescribeDbSecurityGroupsActionEnumDescribeDbSecurityGroups GetDescribeDbSecurityGroupsActionEnum = "DescribeDBSecurityGroups"
)

type GetDescribeDbSecurityGroupsVersionEnum string

const (
	GetDescribeDbSecurityGroupsVersionEnumTwoThousandAndThirteen0110 GetDescribeDbSecurityGroupsVersionEnum = "2013-01-10"
)

type GetDescribeDbSecurityGroupsQueryParams struct {
	Action              GetDescribeDbSecurityGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbSecurityGroupName *string                                `queryParam:"style=form,explode=true,name=DBSecurityGroupName"`
	Marker              *string                                `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords          *int64                                 `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version             GetDescribeDbSecurityGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDbSecurityGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeDbSecurityGroupsRequest struct {
	QueryParams GetDescribeDbSecurityGroupsQueryParams
	Headers     GetDescribeDbSecurityGroupsHeaders
}

type GetDescribeDbSecurityGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
