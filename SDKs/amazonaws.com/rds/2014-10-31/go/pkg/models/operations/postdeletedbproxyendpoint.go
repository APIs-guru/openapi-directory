package operations

type PostDeleteDbProxyEndpointActionEnum string

const (
	PostDeleteDbProxyEndpointActionEnumDeleteDbProxyEndpoint PostDeleteDbProxyEndpointActionEnum = "DeleteDBProxyEndpoint"
)

type PostDeleteDbProxyEndpointVersionEnum string

const (
	PostDeleteDbProxyEndpointVersionEnumTwoThousandAndFourteen1031 PostDeleteDbProxyEndpointVersionEnum = "2014-10-31"
)

type PostDeleteDbProxyEndpointQueryParams struct {
	Action  PostDeleteDbProxyEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDbProxyEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDbProxyEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteDbProxyEndpointRequest struct {
	QueryParams PostDeleteDbProxyEndpointQueryParams
	Headers     PostDeleteDbProxyEndpointHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDbProxyEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
