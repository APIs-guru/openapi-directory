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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
