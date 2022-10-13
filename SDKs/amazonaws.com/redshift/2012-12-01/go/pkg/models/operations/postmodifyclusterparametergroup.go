package operations

type PostModifyClusterParameterGroupActionEnum string

const (
	PostModifyClusterParameterGroupActionEnumModifyClusterParameterGroup PostModifyClusterParameterGroupActionEnum = "ModifyClusterParameterGroup"
)

type PostModifyClusterParameterGroupVersionEnum string

const (
	PostModifyClusterParameterGroupVersionEnumTwoThousandAndTwelve1201 PostModifyClusterParameterGroupVersionEnum = "2012-12-01"
)

type PostModifyClusterParameterGroupQueryParams struct {
	Action  PostModifyClusterParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyClusterParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyClusterParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyClusterParameterGroupRequest struct {
	QueryParams PostModifyClusterParameterGroupQueryParams
	Headers     PostModifyClusterParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyClusterParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
