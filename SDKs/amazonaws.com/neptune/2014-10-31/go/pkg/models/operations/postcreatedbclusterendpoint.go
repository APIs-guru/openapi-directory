package operations

type PostCreateDbClusterEndpointActionEnum string

const (
	PostCreateDbClusterEndpointActionEnumCreateDbClusterEndpoint PostCreateDbClusterEndpointActionEnum = "CreateDBClusterEndpoint"
)

type PostCreateDbClusterEndpointVersionEnum string

const (
	PostCreateDbClusterEndpointVersionEnumTwoThousandAndFourteen1031 PostCreateDbClusterEndpointVersionEnum = "2014-10-31"
)

type PostCreateDbClusterEndpointQueryParams struct {
	Action  PostCreateDbClusterEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDbClusterEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDbClusterEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateDbClusterEndpointRequest struct {
	QueryParams PostCreateDbClusterEndpointQueryParams
	Headers     PostCreateDbClusterEndpointHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDbClusterEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
