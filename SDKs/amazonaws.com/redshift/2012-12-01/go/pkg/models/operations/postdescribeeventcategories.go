package operations

type PostDescribeEventCategoriesActionEnum string

const (
	PostDescribeEventCategoriesActionEnumDescribeEventCategories PostDescribeEventCategoriesActionEnum = "DescribeEventCategories"
)

type PostDescribeEventCategoriesVersionEnum string

const (
	PostDescribeEventCategoriesVersionEnumTwoThousandAndTwelve1201 PostDescribeEventCategoriesVersionEnum = "2012-12-01"
)

type PostDescribeEventCategoriesQueryParams struct {
	Action  PostDescribeEventCategoriesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeEventCategoriesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeEventCategoriesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
