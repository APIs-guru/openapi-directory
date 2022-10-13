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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
