package operations

type PostSetQueueAttributesActionEnum string

const (
	PostSetQueueAttributesActionEnumSetQueueAttributes PostSetQueueAttributesActionEnum = "SetQueueAttributes"
)

type PostSetQueueAttributesVersionEnum string

const (
	PostSetQueueAttributesVersionEnumTwoThousandAndTwelve1105 PostSetQueueAttributesVersionEnum = "2012-11-05"
)

type PostSetQueueAttributesQueryParams struct {
	Action  PostSetQueueAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetQueueAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetQueueAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostSetQueueAttributesRequest struct {
	QueryParams PostSetQueueAttributesQueryParams
	Headers     PostSetQueueAttributesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetQueueAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
