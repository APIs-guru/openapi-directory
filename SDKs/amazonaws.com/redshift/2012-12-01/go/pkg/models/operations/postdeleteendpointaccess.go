package operations

type PostDeleteEndpointAccessActionEnum string

const (
	PostDeleteEndpointAccessActionEnumDeleteEndpointAccess PostDeleteEndpointAccessActionEnum = "DeleteEndpointAccess"
)

type PostDeleteEndpointAccessVersionEnum string

const (
	PostDeleteEndpointAccessVersionEnumTwoThousandAndTwelve1201 PostDeleteEndpointAccessVersionEnum = "2012-12-01"
)

type PostDeleteEndpointAccessQueryParams struct {
	Action  PostDeleteEndpointAccessActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteEndpointAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteEndpointAccessHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteEndpointAccessRequest struct {
	QueryParams PostDeleteEndpointAccessQueryParams
	Headers     PostDeleteEndpointAccessHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteEndpointAccessResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
