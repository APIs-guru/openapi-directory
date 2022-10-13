package operations

type PostGetQueueAttributesActionEnum string

const (
	PostGetQueueAttributesActionEnumGetQueueAttributes PostGetQueueAttributesActionEnum = "GetQueueAttributes"
)

type PostGetQueueAttributesVersionEnum string

const (
	PostGetQueueAttributesVersionEnumTwoThousandAndTwelve1105 PostGetQueueAttributesVersionEnum = "2012-11-05"
)

type PostGetQueueAttributesQueryParams struct {
	Action  PostGetQueueAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetQueueAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetQueueAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetQueueAttributesRequest struct {
	QueryParams PostGetQueueAttributesQueryParams
	Headers     PostGetQueueAttributesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetQueueAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
