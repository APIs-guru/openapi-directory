package operations

type GetDeleteDbClusterEndpointActionEnum string

const (
	GetDeleteDbClusterEndpointActionEnumDeleteDbClusterEndpoint GetDeleteDbClusterEndpointActionEnum = "DeleteDBClusterEndpoint"
)

type GetDeleteDbClusterEndpointVersionEnum string

const (
	GetDeleteDbClusterEndpointVersionEnumTwoThousandAndFourteen1031 GetDeleteDbClusterEndpointVersionEnum = "2014-10-31"
)

type GetDeleteDbClusterEndpointQueryParams struct {
	Action                      GetDeleteDbClusterEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbClusterEndpointIdentifier string                                `queryParam:"style=form,explode=true,name=DBClusterEndpointIdentifier"`
	Version                     GetDeleteDbClusterEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDbClusterEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteDbClusterEndpointRequest struct {
	QueryParams GetDeleteDbClusterEndpointQueryParams
	Headers     GetDeleteDbClusterEndpointHeaders
}

type GetDeleteDbClusterEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
