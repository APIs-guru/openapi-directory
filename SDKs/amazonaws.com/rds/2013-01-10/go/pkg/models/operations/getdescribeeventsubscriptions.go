package operations

type GetDescribeEventSubscriptionsActionEnum string

const (
	GetDescribeEventSubscriptionsActionEnumDescribeEventSubscriptions GetDescribeEventSubscriptionsActionEnum = "DescribeEventSubscriptions"
)

type GetDescribeEventSubscriptionsVersionEnum string

const (
	GetDescribeEventSubscriptionsVersionEnumTwoThousandAndThirteen0110 GetDescribeEventSubscriptionsVersionEnum = "2013-01-10"
)

type GetDescribeEventSubscriptionsQueryParams struct {
	Action           GetDescribeEventSubscriptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker           *string                                  `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords       *int64                                   `queryParam:"style=form,explode=true,name=MaxRecords"`
	SubscriptionName *string                                  `queryParam:"style=form,explode=true,name=SubscriptionName"`
	Version          GetDescribeEventSubscriptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeEventSubscriptionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
