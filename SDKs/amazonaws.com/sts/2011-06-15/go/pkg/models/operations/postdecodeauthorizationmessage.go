package operations

type PostDecodeAuthorizationMessageActionEnum string

const (
	PostDecodeAuthorizationMessageActionEnumDecodeAuthorizationMessage PostDecodeAuthorizationMessageActionEnum = "DecodeAuthorizationMessage"
)

type PostDecodeAuthorizationMessageVersionEnum string

const (
	PostDecodeAuthorizationMessageVersionEnumTwoThousandAndEleven0615 PostDecodeAuthorizationMessageVersionEnum = "2011-06-15"
)

type PostDecodeAuthorizationMessageQueryParams struct {
	Action  PostDecodeAuthorizationMessageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDecodeAuthorizationMessageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDecodeAuthorizationMessageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDecodeAuthorizationMessageRequest struct {
	QueryParams PostDecodeAuthorizationMessageQueryParams
	Headers     PostDecodeAuthorizationMessageHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDecodeAuthorizationMessageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
