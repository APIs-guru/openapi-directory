package operations

type PostCreateDbProxyEndpointActionEnum string

const (
	PostCreateDbProxyEndpointActionEnumCreateDbProxyEndpoint PostCreateDbProxyEndpointActionEnum = "CreateDBProxyEndpoint"
)

type PostCreateDbProxyEndpointVersionEnum string

const (
	PostCreateDbProxyEndpointVersionEnumTwoThousandAndFourteen1031 PostCreateDbProxyEndpointVersionEnum = "2014-10-31"
)

type PostCreateDbProxyEndpointQueryParams struct {
	Action  PostCreateDbProxyEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDbProxyEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDbProxyEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateDbProxyEndpointRequest struct {
	QueryParams PostCreateDbProxyEndpointQueryParams
	Headers     PostCreateDbProxyEndpointHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDbProxyEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
