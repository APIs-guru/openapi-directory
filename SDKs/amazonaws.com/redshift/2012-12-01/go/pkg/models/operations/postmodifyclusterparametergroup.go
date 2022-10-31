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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
