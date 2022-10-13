package operations

type PostAuthorizeEndpointAccessActionEnum string

const (
	PostAuthorizeEndpointAccessActionEnumAuthorizeEndpointAccess PostAuthorizeEndpointAccessActionEnum = "AuthorizeEndpointAccess"
)

type PostAuthorizeEndpointAccessVersionEnum string

const (
	PostAuthorizeEndpointAccessVersionEnumTwoThousandAndTwelve1201 PostAuthorizeEndpointAccessVersionEnum = "2012-12-01"
)

type PostAuthorizeEndpointAccessQueryParams struct {
	Action  PostAuthorizeEndpointAccessActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAuthorizeEndpointAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAuthorizeEndpointAccessHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAuthorizeEndpointAccessRequest struct {
	QueryParams PostAuthorizeEndpointAccessQueryParams
	Headers     PostAuthorizeEndpointAccessHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAuthorizeEndpointAccessResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
