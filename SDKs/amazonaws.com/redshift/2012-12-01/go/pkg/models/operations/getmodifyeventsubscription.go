package operations

type GetModifyEventSubscriptionActionEnum string

const (
	GetModifyEventSubscriptionActionEnumModifyEventSubscription GetModifyEventSubscriptionActionEnum = "ModifyEventSubscription"
)

type GetModifyEventSubscriptionVersionEnum string

const (
	GetModifyEventSubscriptionVersionEnumTwoThousandAndTwelve1201 GetModifyEventSubscriptionVersionEnum = "2012-12-01"
)

type GetModifyEventSubscriptionQueryParams struct {
	Action           GetModifyEventSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Enabled          *bool                                 `queryParam:"style=form,explode=true,name=Enabled"`
	EventCategories  []string                              `queryParam:"style=form,explode=true,name=EventCategories"`
	Severity         *string                               `queryParam:"style=form,explode=true,name=Severity"`
	SnsTopicArn      *string                               `queryParam:"style=form,explode=true,name=SnsTopicArn"`
	SourceIds        []string                              `queryParam:"style=form,explode=true,name=SourceIds"`
	SourceType       *string                               `queryParam:"style=form,explode=true,name=SourceType"`
	SubscriptionName string                                `queryParam:"style=form,explode=true,name=SubscriptionName"`
	Version          GetModifyEventSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyEventSubscriptionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyEventSubscriptionRequest struct {
	QueryParams GetModifyEventSubscriptionQueryParams
	Headers     GetModifyEventSubscriptionHeaders
}

type GetModifyEventSubscriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
