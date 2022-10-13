package operations

type GetGetSessionTokenActionEnum string

const (
	GetGetSessionTokenActionEnumGetSessionToken GetGetSessionTokenActionEnum = "GetSessionToken"
)

type GetGetSessionTokenVersionEnum string

const (
	GetGetSessionTokenVersionEnumTwoThousandAndEleven0615 GetGetSessionTokenVersionEnum = "2011-06-15"
)

type GetGetSessionTokenQueryParams struct {
	Action          GetGetSessionTokenActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DurationSeconds *int64                        `queryParam:"style=form,explode=true,name=DurationSeconds"`
	SerialNumber    *string                       `queryParam:"style=form,explode=true,name=SerialNumber"`
	TokenCode       *string                       `queryParam:"style=form,explode=true,name=TokenCode"`
	Version         GetGetSessionTokenVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetSessionTokenHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetSessionTokenRequest struct {
	QueryParams GetGetSessionTokenQueryParams
	Headers     GetGetSessionTokenHeaders
}

type GetGetSessionTokenResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
