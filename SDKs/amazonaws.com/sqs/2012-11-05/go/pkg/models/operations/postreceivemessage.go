package operations

type PostReceiveMessageActionEnum string

const (
	PostReceiveMessageActionEnumReceiveMessage PostReceiveMessageActionEnum = "ReceiveMessage"
)

type PostReceiveMessageVersionEnum string

const (
	PostReceiveMessageVersionEnumTwoThousandAndTwelve1105 PostReceiveMessageVersionEnum = "2012-11-05"
)

type PostReceiveMessageQueryParams struct {
	Action  PostReceiveMessageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostReceiveMessageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostReceiveMessageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostReceiveMessageRequest struct {
	QueryParams PostReceiveMessageQueryParams
	Headers     PostReceiveMessageHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostReceiveMessageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
