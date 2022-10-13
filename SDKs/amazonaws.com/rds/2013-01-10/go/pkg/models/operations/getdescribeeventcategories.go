package operations

type GetDescribeEventCategoriesActionEnum string

const (
	GetDescribeEventCategoriesActionEnumDescribeEventCategories GetDescribeEventCategoriesActionEnum = "DescribeEventCategories"
)

type GetDescribeEventCategoriesVersionEnum string

const (
	GetDescribeEventCategoriesVersionEnumTwoThousandAndThirteen0110 GetDescribeEventCategoriesVersionEnum = "2013-01-10"
)

type GetDescribeEventCategoriesQueryParams struct {
	Action     GetDescribeEventCategoriesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	SourceType *string                               `queryParam:"style=form,explode=true,name=SourceType"`
	Version    GetDescribeEventCategoriesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeEventCategoriesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeEventCategoriesRequest struct {
	QueryParams GetDescribeEventCategoriesQueryParams
	Headers     GetDescribeEventCategoriesHeaders
}

type GetDescribeEventCategoriesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
