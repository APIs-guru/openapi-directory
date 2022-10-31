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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
