package operations

type PostAddSourceIdentifierToSubscriptionActionEnum string

const (
	PostAddSourceIdentifierToSubscriptionActionEnumAddSourceIdentifierToSubscription PostAddSourceIdentifierToSubscriptionActionEnum = "AddSourceIdentifierToSubscription"
)

type PostAddSourceIdentifierToSubscriptionVersionEnum string

const (
	PostAddSourceIdentifierToSubscriptionVersionEnumTwoThousandAndFourteen0901 PostAddSourceIdentifierToSubscriptionVersionEnum = "2014-09-01"
)

type PostAddSourceIdentifierToSubscriptionQueryParams struct {
	Action  PostAddSourceIdentifierToSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAddSourceIdentifierToSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAddSourceIdentifierToSubscriptionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAddSourceIdentifierToSubscriptionRequest struct {
	QueryParams PostAddSourceIdentifierToSubscriptionQueryParams
	Headers     PostAddSourceIdentifierToSubscriptionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAddSourceIdentifierToSubscriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
