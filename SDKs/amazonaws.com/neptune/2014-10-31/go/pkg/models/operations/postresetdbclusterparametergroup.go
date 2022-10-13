package operations

type PostResetDbClusterParameterGroupActionEnum string

const (
	PostResetDbClusterParameterGroupActionEnumResetDbClusterParameterGroup PostResetDbClusterParameterGroupActionEnum = "ResetDBClusterParameterGroup"
)

type PostResetDbClusterParameterGroupVersionEnum string

const (
	PostResetDbClusterParameterGroupVersionEnumTwoThousandAndFourteen1031 PostResetDbClusterParameterGroupVersionEnum = "2014-10-31"
)

type PostResetDbClusterParameterGroupQueryParams struct {
	Action  PostResetDbClusterParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostResetDbClusterParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostResetDbClusterParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostResetDbClusterParameterGroupRequest struct {
	QueryParams PostResetDbClusterParameterGroupQueryParams
	Headers     PostResetDbClusterParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostResetDbClusterParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
