package operations

type PostDescribeOptionGroupsActionEnum string

const (
	PostDescribeOptionGroupsActionEnumDescribeOptionGroups PostDescribeOptionGroupsActionEnum = "DescribeOptionGroups"
)

type PostDescribeOptionGroupsVersionEnum string

const (
	PostDescribeOptionGroupsVersionEnumTwoThousandAndThirteen0212 PostDescribeOptionGroupsVersionEnum = "2013-02-12"
)

type PostDescribeOptionGroupsQueryParams struct {
	Action     PostDescribeOptionGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                             `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                             `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeOptionGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeOptionGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeOptionGroupsRequest struct {
	QueryParams PostDescribeOptionGroupsQueryParams
	Headers     PostDescribeOptionGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeOptionGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
