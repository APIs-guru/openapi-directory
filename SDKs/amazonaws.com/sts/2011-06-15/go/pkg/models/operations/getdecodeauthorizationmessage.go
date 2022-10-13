package operations

type GetDecodeAuthorizationMessageActionEnum string

const (
	GetDecodeAuthorizationMessageActionEnumDecodeAuthorizationMessage GetDecodeAuthorizationMessageActionEnum = "DecodeAuthorizationMessage"
)

type GetDecodeAuthorizationMessageVersionEnum string

const (
	GetDecodeAuthorizationMessageVersionEnumTwoThousandAndEleven0615 GetDecodeAuthorizationMessageVersionEnum = "2011-06-15"
)

type GetDecodeAuthorizationMessageQueryParams struct {
	Action         GetDecodeAuthorizationMessageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	EncodedMessage string                                   `queryParam:"style=form,explode=true,name=EncodedMessage"`
	Version        GetDecodeAuthorizationMessageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDecodeAuthorizationMessageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDecodeAuthorizationMessageRequest struct {
	QueryParams GetDecodeAuthorizationMessageQueryParams
	Headers     GetDecodeAuthorizationMessageHeaders
}

type GetDecodeAuthorizationMessageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
