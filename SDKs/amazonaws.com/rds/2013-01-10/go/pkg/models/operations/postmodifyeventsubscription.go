package operations

type PostModifyEventSubscriptionActionEnum string

const (
	PostModifyEventSubscriptionActionEnumModifyEventSubscription PostModifyEventSubscriptionActionEnum = "ModifyEventSubscription"
)

type PostModifyEventSubscriptionVersionEnum string

const (
	PostModifyEventSubscriptionVersionEnumTwoThousandAndThirteen0110 PostModifyEventSubscriptionVersionEnum = "2013-01-10"
)

type PostModifyEventSubscriptionQueryParams struct {
	Action  PostModifyEventSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyEventSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyEventSubscriptionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyEventSubscriptionRequest struct {
	QueryParams PostModifyEventSubscriptionQueryParams
	Headers     PostModifyEventSubscriptionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyEventSubscriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
