package operations

type PostCreateEventSubscriptionActionEnum string

const (
	PostCreateEventSubscriptionActionEnumCreateEventSubscription PostCreateEventSubscriptionActionEnum = "CreateEventSubscription"
)

type PostCreateEventSubscriptionVersionEnum string

const (
	PostCreateEventSubscriptionVersionEnumTwoThousandAndThirteen0212 PostCreateEventSubscriptionVersionEnum = "2013-02-12"
)

type PostCreateEventSubscriptionQueryParams struct {
	Action  PostCreateEventSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateEventSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateEventSubscriptionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateEventSubscriptionRequest struct {
	QueryParams PostCreateEventSubscriptionQueryParams
	Headers     PostCreateEventSubscriptionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateEventSubscriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
