package operations

type GetCreateEventSubscriptionActionEnum string

const (
	GetCreateEventSubscriptionActionEnumCreateEventSubscription GetCreateEventSubscriptionActionEnum = "CreateEventSubscription"
)

type GetCreateEventSubscriptionVersionEnum string

const (
	GetCreateEventSubscriptionVersionEnumTwoThousandAndThirteen0110 GetCreateEventSubscriptionVersionEnum = "2013-01-10"
)

type GetCreateEventSubscriptionQueryParams struct {
	Action           GetCreateEventSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Enabled          *bool                                 `queryParam:"style=form,explode=true,name=Enabled"`
	EventCategories  []string                              `queryParam:"style=form,explode=true,name=EventCategories"`
	SnsTopicArn      string                                `queryParam:"style=form,explode=true,name=SnsTopicArn"`
	SourceIds        []string                              `queryParam:"style=form,explode=true,name=SourceIds"`
	SourceType       *string                               `queryParam:"style=form,explode=true,name=SourceType"`
	SubscriptionName string                                `queryParam:"style=form,explode=true,name=SubscriptionName"`
	Version          GetCreateEventSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateEventSubscriptionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCreateEventSubscriptionRequest struct {
	QueryParams GetCreateEventSubscriptionQueryParams
	Headers     GetCreateEventSubscriptionHeaders
}

type GetCreateEventSubscriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
