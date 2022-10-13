package operations

type GetDescribeEventSubscriptionsActionEnum string

const (
	GetDescribeEventSubscriptionsActionEnumDescribeEventSubscriptions GetDescribeEventSubscriptionsActionEnum = "DescribeEventSubscriptions"
)

type GetDescribeEventSubscriptionsVersionEnum string

const (
	GetDescribeEventSubscriptionsVersionEnumTwoThousandAndThirteen0212 GetDescribeEventSubscriptionsVersionEnum = "2013-02-12"
)

type GetDescribeEventSubscriptionsQueryParams struct {
	Action           GetDescribeEventSubscriptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker           *string                                  `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords       *int64                                   `queryParam:"style=form,explode=true,name=MaxRecords"`
	SubscriptionName *string                                  `queryParam:"style=form,explode=true,name=SubscriptionName"`
	Version          GetDescribeEventSubscriptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeEventSubscriptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeEventSubscriptionsRequest struct {
	QueryParams GetDescribeEventSubscriptionsQueryParams
	Headers     GetDescribeEventSubscriptionsHeaders
}

type GetDescribeEventSubscriptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
