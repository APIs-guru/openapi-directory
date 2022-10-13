package operations

type GetRemoveSourceIdentifierFromSubscriptionActionEnum string

const (
	GetRemoveSourceIdentifierFromSubscriptionActionEnumRemoveSourceIdentifierFromSubscription GetRemoveSourceIdentifierFromSubscriptionActionEnum = "RemoveSourceIdentifierFromSubscription"
)

type GetRemoveSourceIdentifierFromSubscriptionVersionEnum string

const (
	GetRemoveSourceIdentifierFromSubscriptionVersionEnumTwoThousandAndFourteen0901 GetRemoveSourceIdentifierFromSubscriptionVersionEnum = "2014-09-01"
)

type GetRemoveSourceIdentifierFromSubscriptionQueryParams struct {
	Action           GetRemoveSourceIdentifierFromSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	SourceIdentifier string                                               `queryParam:"style=form,explode=true,name=SourceIdentifier"`
	SubscriptionName string                                               `queryParam:"style=form,explode=true,name=SubscriptionName"`
	Version          GetRemoveSourceIdentifierFromSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRemoveSourceIdentifierFromSubscriptionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRemoveSourceIdentifierFromSubscriptionRequest struct {
	QueryParams GetRemoveSourceIdentifierFromSubscriptionQueryParams
	Headers     GetRemoveSourceIdentifierFromSubscriptionHeaders
}

type GetRemoveSourceIdentifierFromSubscriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
