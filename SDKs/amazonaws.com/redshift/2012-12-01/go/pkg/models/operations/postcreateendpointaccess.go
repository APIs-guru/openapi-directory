package operations

type PostCreateEndpointAccessActionEnum string

const (
	PostCreateEndpointAccessActionEnumCreateEndpointAccess PostCreateEndpointAccessActionEnum = "CreateEndpointAccess"
)

type PostCreateEndpointAccessVersionEnum string

const (
	PostCreateEndpointAccessVersionEnumTwoThousandAndTwelve1201 PostCreateEndpointAccessVersionEnum = "2012-12-01"
)

type PostCreateEndpointAccessQueryParams struct {
	Action  PostCreateEndpointAccessActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateEndpointAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateEndpointAccessHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateEndpointAccessRequest struct {
	QueryParams PostCreateEndpointAccessQueryParams
	Headers     PostCreateEndpointAccessHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateEndpointAccessResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
