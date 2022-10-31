package operations

type PostDescribeEventSubscriptionsActionEnum string

const (
	PostDescribeEventSubscriptionsActionEnumDescribeEventSubscriptions PostDescribeEventSubscriptionsActionEnum = "DescribeEventSubscriptions"
)

type PostDescribeEventSubscriptionsVersionEnum string

const (
	PostDescribeEventSubscriptionsVersionEnumTwoThousandAndFourteen0901 PostDescribeEventSubscriptionsVersionEnum = "2014-09-01"
)

type PostDescribeEventSubscriptionsQueryParams struct {
	Action  PostDescribeEventSubscriptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeEventSubscriptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeEventSubscriptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeEventSubscriptionsRequest struct {
	QueryParams PostDescribeEventSubscriptionsQueryParams
	Headers     PostDescribeEventSubscriptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeEventSubscriptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
