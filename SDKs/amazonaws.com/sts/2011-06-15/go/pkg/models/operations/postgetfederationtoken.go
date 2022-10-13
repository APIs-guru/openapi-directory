package operations

type PostGetFederationTokenActionEnum string

const (
	PostGetFederationTokenActionEnumGetFederationToken PostGetFederationTokenActionEnum = "GetFederationToken"
)

type PostGetFederationTokenVersionEnum string

const (
	PostGetFederationTokenVersionEnumTwoThousandAndEleven0615 PostGetFederationTokenVersionEnum = "2011-06-15"
)

type PostGetFederationTokenQueryParams struct {
	Action  PostGetFederationTokenActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetFederationTokenVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetFederationTokenHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetFederationTokenRequest struct {
	QueryParams PostGetFederationTokenQueryParams
	Headers     PostGetFederationTokenHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetFederationTokenResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
