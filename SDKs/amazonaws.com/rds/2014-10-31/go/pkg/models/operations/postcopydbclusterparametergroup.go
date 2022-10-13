package operations

type PostCopyDbClusterParameterGroupActionEnum string

const (
	PostCopyDbClusterParameterGroupActionEnumCopyDbClusterParameterGroup PostCopyDbClusterParameterGroupActionEnum = "CopyDBClusterParameterGroup"
)

type PostCopyDbClusterParameterGroupVersionEnum string

const (
	PostCopyDbClusterParameterGroupVersionEnumTwoThousandAndFourteen1031 PostCopyDbClusterParameterGroupVersionEnum = "2014-10-31"
)

type PostCopyDbClusterParameterGroupQueryParams struct {
	Action  PostCopyDbClusterParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCopyDbClusterParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCopyDbClusterParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCopyDbClusterParameterGroupRequest struct {
	QueryParams PostCopyDbClusterParameterGroupQueryParams
	Headers     PostCopyDbClusterParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCopyDbClusterParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
