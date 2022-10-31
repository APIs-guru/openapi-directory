package operations

type PostRevokeEndpointAccessActionEnum string

const (
	PostRevokeEndpointAccessActionEnumRevokeEndpointAccess PostRevokeEndpointAccessActionEnum = "RevokeEndpointAccess"
)

type PostRevokeEndpointAccessVersionEnum string

const (
	PostRevokeEndpointAccessVersionEnumTwoThousandAndTwelve1201 PostRevokeEndpointAccessVersionEnum = "2012-12-01"
)

type PostRevokeEndpointAccessQueryParams struct {
	Action  PostRevokeEndpointAccessActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRevokeEndpointAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRevokeEndpointAccessHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostRevokeEndpointAccessRequest struct {
	QueryParams PostRevokeEndpointAccessQueryParams
	Headers     PostRevokeEndpointAccessHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRevokeEndpointAccessResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
