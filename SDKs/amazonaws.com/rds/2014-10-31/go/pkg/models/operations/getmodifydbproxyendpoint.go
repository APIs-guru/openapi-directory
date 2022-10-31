package operations

type GetModifyDbProxyEndpointActionEnum string

const (
	GetModifyDbProxyEndpointActionEnumModifyDbProxyEndpoint GetModifyDbProxyEndpointActionEnum = "ModifyDBProxyEndpoint"
)

type GetModifyDbProxyEndpointVersionEnum string

const (
	GetModifyDbProxyEndpointVersionEnumTwoThousandAndFourteen1031 GetModifyDbProxyEndpointVersionEnum = "2014-10-31"
)

type GetModifyDbProxyEndpointQueryParams struct {
	Action                 GetModifyDbProxyEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbProxyEndpointName    string                              `queryParam:"style=form,explode=true,name=DBProxyEndpointName"`
	NewDbProxyEndpointName *string                             `queryParam:"style=form,explode=true,name=NewDBProxyEndpointName"`
	Version                GetModifyDbProxyEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VpcSecurityGroupIds    []string                            `queryParam:"style=form,explode=true,name=VpcSecurityGroupIds"`
}

type GetModifyDbProxyEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyDbProxyEndpointRequest struct {
	QueryParams GetModifyDbProxyEndpointQueryParams
	Headers     GetModifyDbProxyEndpointHeaders
}

type GetModifyDbProxyEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
