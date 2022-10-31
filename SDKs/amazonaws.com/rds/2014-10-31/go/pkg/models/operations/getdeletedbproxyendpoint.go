package operations

type GetDeleteDbProxyEndpointActionEnum string

const (
	GetDeleteDbProxyEndpointActionEnumDeleteDbProxyEndpoint GetDeleteDbProxyEndpointActionEnum = "DeleteDBProxyEndpoint"
)

type GetDeleteDbProxyEndpointVersionEnum string

const (
	GetDeleteDbProxyEndpointVersionEnumTwoThousandAndFourteen1031 GetDeleteDbProxyEndpointVersionEnum = "2014-10-31"
)

type GetDeleteDbProxyEndpointQueryParams struct {
	Action              GetDeleteDbProxyEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbProxyEndpointName string                              `queryParam:"style=form,explode=true,name=DBProxyEndpointName"`
	Version             GetDeleteDbProxyEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDbProxyEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteDbProxyEndpointRequest struct {
	QueryParams GetDeleteDbProxyEndpointQueryParams
	Headers     GetDeleteDbProxyEndpointHeaders
}

type GetDeleteDbProxyEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
