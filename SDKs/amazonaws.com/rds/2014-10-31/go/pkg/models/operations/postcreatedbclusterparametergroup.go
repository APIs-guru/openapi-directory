package operations

type PostCreateDbClusterParameterGroupActionEnum string

const (
	PostCreateDbClusterParameterGroupActionEnumCreateDbClusterParameterGroup PostCreateDbClusterParameterGroupActionEnum = "CreateDBClusterParameterGroup"
)

type PostCreateDbClusterParameterGroupVersionEnum string

const (
	PostCreateDbClusterParameterGroupVersionEnumTwoThousandAndFourteen1031 PostCreateDbClusterParameterGroupVersionEnum = "2014-10-31"
)

type PostCreateDbClusterParameterGroupQueryParams struct {
	Action  PostCreateDbClusterParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDbClusterParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDbClusterParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateDbClusterParameterGroupRequest struct {
	QueryParams PostCreateDbClusterParameterGroupQueryParams
	Headers     PostCreateDbClusterParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDbClusterParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
