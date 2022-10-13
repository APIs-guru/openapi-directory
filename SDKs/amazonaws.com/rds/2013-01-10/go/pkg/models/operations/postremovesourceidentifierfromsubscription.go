package operations

type PostRemoveSourceIdentifierFromSubscriptionActionEnum string

const (
	PostRemoveSourceIdentifierFromSubscriptionActionEnumRemoveSourceIdentifierFromSubscription PostRemoveSourceIdentifierFromSubscriptionActionEnum = "RemoveSourceIdentifierFromSubscription"
)

type PostRemoveSourceIdentifierFromSubscriptionVersionEnum string

const (
	PostRemoveSourceIdentifierFromSubscriptionVersionEnumTwoThousandAndThirteen0110 PostRemoveSourceIdentifierFromSubscriptionVersionEnum = "2013-01-10"
)

type PostRemoveSourceIdentifierFromSubscriptionQueryParams struct {
	Action  PostRemoveSourceIdentifierFromSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRemoveSourceIdentifierFromSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRemoveSourceIdentifierFromSubscriptionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRemoveSourceIdentifierFromSubscriptionRequest struct {
	QueryParams PostRemoveSourceIdentifierFromSubscriptionQueryParams
	Headers     PostRemoveSourceIdentifierFromSubscriptionHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRemoveSourceIdentifierFromSubscriptionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
