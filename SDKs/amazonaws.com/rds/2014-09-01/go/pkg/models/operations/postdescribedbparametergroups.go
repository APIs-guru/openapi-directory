package operations

type PostDescribeDbParameterGroupsActionEnum string

const (
	PostDescribeDbParameterGroupsActionEnumDescribeDbParameterGroups PostDescribeDbParameterGroupsActionEnum = "DescribeDBParameterGroups"
)

type PostDescribeDbParameterGroupsVersionEnum string

const (
	PostDescribeDbParameterGroupsVersionEnumTwoThousandAndFourteen0901 PostDescribeDbParameterGroupsVersionEnum = "2014-09-01"
)

type PostDescribeDbParameterGroupsQueryParams struct {
	Action  PostDescribeDbParameterGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeDbParameterGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbParameterGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeDbParameterGroupsRequest struct {
	QueryParams PostDescribeDbParameterGroupsQueryParams
	Headers     PostDescribeDbParameterGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbParameterGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
