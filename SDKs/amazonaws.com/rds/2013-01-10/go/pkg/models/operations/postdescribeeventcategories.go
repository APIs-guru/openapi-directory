package operations

type PostDescribeEventCategoriesActionEnum string

const (
	PostDescribeEventCategoriesActionEnumDescribeEventCategories PostDescribeEventCategoriesActionEnum = "DescribeEventCategories"
)

type PostDescribeEventCategoriesVersionEnum string

const (
	PostDescribeEventCategoriesVersionEnumTwoThousandAndThirteen0110 PostDescribeEventCategoriesVersionEnum = "2013-01-10"
)

type PostDescribeEventCategoriesQueryParams struct {
	Action  PostDescribeEventCategoriesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeEventCategoriesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeEventCategoriesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeEventCategoriesRequest struct {
	QueryParams PostDescribeEventCategoriesQueryParams
	Headers     PostDescribeEventCategoriesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeEventCategoriesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
