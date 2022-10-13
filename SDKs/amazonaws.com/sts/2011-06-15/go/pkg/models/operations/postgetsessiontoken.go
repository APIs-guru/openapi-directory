package operations

type PostGetSessionTokenActionEnum string

const (
	PostGetSessionTokenActionEnumGetSessionToken PostGetSessionTokenActionEnum = "GetSessionToken"
)

type PostGetSessionTokenVersionEnum string

const (
	PostGetSessionTokenVersionEnumTwoThousandAndEleven0615 PostGetSessionTokenVersionEnum = "2011-06-15"
)

type PostGetSessionTokenQueryParams struct {
	Action  PostGetSessionTokenActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetSessionTokenVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetSessionTokenHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetSessionTokenRequest struct {
	QueryParams PostGetSessionTokenQueryParams
	Headers     PostGetSessionTokenHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetSessionTokenResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
