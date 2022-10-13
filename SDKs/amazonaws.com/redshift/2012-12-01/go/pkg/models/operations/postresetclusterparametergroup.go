package operations

type PostResetClusterParameterGroupActionEnum string

const (
	PostResetClusterParameterGroupActionEnumResetClusterParameterGroup PostResetClusterParameterGroupActionEnum = "ResetClusterParameterGroup"
)

type PostResetClusterParameterGroupVersionEnum string

const (
	PostResetClusterParameterGroupVersionEnumTwoThousandAndTwelve1201 PostResetClusterParameterGroupVersionEnum = "2012-12-01"
)

type PostResetClusterParameterGroupQueryParams struct {
	Action  PostResetClusterParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostResetClusterParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostResetClusterParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostResetClusterParameterGroupRequest struct {
	QueryParams PostResetClusterParameterGroupQueryParams
	Headers     PostResetClusterParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostResetClusterParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
