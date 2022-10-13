package operations

type PostDescribeEventSubscriptionsActionEnum string

const (
	PostDescribeEventSubscriptionsActionEnumDescribeEventSubscriptions PostDescribeEventSubscriptionsActionEnum = "DescribeEventSubscriptions"
)

type PostDescribeEventSubscriptionsVersionEnum string

const (
	PostDescribeEventSubscriptionsVersionEnumTwoThousandAndFourteen1031 PostDescribeEventSubscriptionsVersionEnum = "2014-10-31"
)

type PostDescribeEventSubscriptionsQueryParams struct {
	Action     PostDescribeEventSubscriptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                   `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                   `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeEventSubscriptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeEventSubscriptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
