package operations

type PostDeleteDbClusterEndpointActionEnum string

const (
	PostDeleteDbClusterEndpointActionEnumDeleteDbClusterEndpoint PostDeleteDbClusterEndpointActionEnum = "DeleteDBClusterEndpoint"
)

type PostDeleteDbClusterEndpointVersionEnum string

const (
	PostDeleteDbClusterEndpointVersionEnumTwoThousandAndFourteen1031 PostDeleteDbClusterEndpointVersionEnum = "2014-10-31"
)

type PostDeleteDbClusterEndpointQueryParams struct {
	Action  PostDeleteDbClusterEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDbClusterEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDbClusterEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteDbClusterEndpointRequest struct {
	QueryParams PostDeleteDbClusterEndpointQueryParams
	Headers     PostDeleteDbClusterEndpointHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDbClusterEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
