package operations

type GetDescribeDbSubnetGroupsActionEnum string

const (
	GetDescribeDbSubnetGroupsActionEnumDescribeDbSubnetGroups GetDescribeDbSubnetGroupsActionEnum = "DescribeDBSubnetGroups"
)

type GetDescribeDbSubnetGroupsVersionEnum string

const (
	GetDescribeDbSubnetGroupsVersionEnumTwoThousandAndThirteen0212 GetDescribeDbSubnetGroupsVersionEnum = "2013-02-12"
)

type GetDescribeDbSubnetGroupsQueryParams struct {
	Action            GetDescribeDbSubnetGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbSubnetGroupName *string                              `queryParam:"style=form,explode=true,name=DBSubnetGroupName"`
	Marker            *string                              `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords        *int64                               `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version           GetDescribeDbSubnetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDbSubnetGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeDbSubnetGroupsRequest struct {
	QueryParams GetDescribeDbSubnetGroupsQueryParams
	Headers     GetDescribeDbSubnetGroupsHeaders
}

type GetDescribeDbSubnetGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
