package operations

type PostModifyDbProxyEndpointActionEnum string

const (
	PostModifyDbProxyEndpointActionEnumModifyDbProxyEndpoint PostModifyDbProxyEndpointActionEnum = "ModifyDBProxyEndpoint"
)

type PostModifyDbProxyEndpointVersionEnum string

const (
	PostModifyDbProxyEndpointVersionEnumTwoThousandAndFourteen1031 PostModifyDbProxyEndpointVersionEnum = "2014-10-31"
)

type PostModifyDbProxyEndpointQueryParams struct {
	Action  PostModifyDbProxyEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyDbProxyEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyDbProxyEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyDbProxyEndpointRequest struct {
	QueryParams PostModifyDbProxyEndpointQueryParams
	Headers     PostModifyDbProxyEndpointHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyDbProxyEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
