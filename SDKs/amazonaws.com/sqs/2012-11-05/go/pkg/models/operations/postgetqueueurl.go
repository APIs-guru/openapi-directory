package operations

type PostGetQueueURLActionEnum string

const (
	PostGetQueueURLActionEnumGetQueueURL PostGetQueueURLActionEnum = "GetQueueUrl"
)

type PostGetQueueURLVersionEnum string

const (
	PostGetQueueURLVersionEnumTwoThousandAndTwelve1105 PostGetQueueURLVersionEnum = "2012-11-05"
)

type PostGetQueueURLQueryParams struct {
	Action  PostGetQueueURLActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetQueueURLVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetQueueURLHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetQueueURLRequest struct {
	QueryParams PostGetQueueURLQueryParams
	Headers     PostGetQueueURLHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetQueueURLResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
