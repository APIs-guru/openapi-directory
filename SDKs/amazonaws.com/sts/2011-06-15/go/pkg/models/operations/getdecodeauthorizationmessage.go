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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
