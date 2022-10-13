package operations

type GetDeleteEventSubscriptionActionEnum string

const (
	GetDeleteEventSubscriptionActionEnumDeleteEventSubscription GetDeleteEventSubscriptionActionEnum = "DeleteEventSubscription"
)

type GetDeleteEventSubscriptionVersionEnum string

const (
	GetDeleteEventSubscriptionVersionEnumTwoThousandAndFourteen1031 GetDeleteEventSubscriptionVersionEnum = "2014-10-31"
)

type GetDeleteEventSubscriptionQueryParams struct {
	Action           GetDeleteEventSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	SubscriptionName string                                `queryParam:"style=form,explode=true,name=SubscriptionName"`
	Version          GetDeleteEventSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteEventSubscriptionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteEventSubscriptionRequest struct {
	QueryParams GetDeleteEventSubscriptionQueryParams
	Headers     GetDeleteEventSubscriptionHeaders
}

type GetDeleteEventSubscriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
