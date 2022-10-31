package operations

type PostRemoveSourceIdentifierFromSubscriptionActionEnum string

const (
	PostRemoveSourceIdentifierFromSubscriptionActionEnumRemoveSourceIdentifierFromSubscription PostRemoveSourceIdentifierFromSubscriptionActionEnum = "RemoveSourceIdentifierFromSubscription"
)

type PostRemoveSourceIdentifierFromSubscriptionVersionEnum string

const (
	PostRemoveSourceIdentifierFromSubscriptionVersionEnumTwoThousandAndFourteen0901 PostRemoveSourceIdentifierFromSubscriptionVersionEnum = "2014-09-01"
)

type PostRemoveSourceIdentifierFromSubscriptionQueryParams struct {
	Action  PostRemoveSourceIdentifierFromSubscriptionActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRemoveSourceIdentifierFromSubscriptionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRemoveSourceIdentifierFromSubscriptionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
