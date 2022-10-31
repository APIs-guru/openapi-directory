package operations

type PostDescribeDbSubnetGroupsActionEnum string

const (
	PostDescribeDbSubnetGroupsActionEnumDescribeDbSubnetGroups PostDescribeDbSubnetGroupsActionEnum = "DescribeDBSubnetGroups"
)

type PostDescribeDbSubnetGroupsVersionEnum string

const (
	PostDescribeDbSubnetGroupsVersionEnumTwoThousandAndThirteen0212 PostDescribeDbSubnetGroupsVersionEnum = "2013-02-12"
)

type PostDescribeDbSubnetGroupsQueryParams struct {
	Action     PostDescribeDbSubnetGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                               `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                               `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDbSubnetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbSubnetGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeDbSubnetGroupsRequest struct {
	QueryParams PostDescribeDbSubnetGroupsQueryParams
	Headers     PostDescribeDbSubnetGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbSubnetGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
