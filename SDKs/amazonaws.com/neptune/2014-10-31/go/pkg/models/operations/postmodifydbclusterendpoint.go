package operations

type PostModifyDbClusterEndpointActionEnum string

const (
	PostModifyDbClusterEndpointActionEnumModifyDbClusterEndpoint PostModifyDbClusterEndpointActionEnum = "ModifyDBClusterEndpoint"
)

type PostModifyDbClusterEndpointVersionEnum string

const (
	PostModifyDbClusterEndpointVersionEnumTwoThousandAndFourteen1031 PostModifyDbClusterEndpointVersionEnum = "2014-10-31"
)

type PostModifyDbClusterEndpointQueryParams struct {
	Action  PostModifyDbClusterEndpointActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyDbClusterEndpointVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyDbClusterEndpointHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyDbClusterEndpointRequest struct {
	QueryParams PostModifyDbClusterEndpointQueryParams
	Headers     PostModifyDbClusterEndpointHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyDbClusterEndpointResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
