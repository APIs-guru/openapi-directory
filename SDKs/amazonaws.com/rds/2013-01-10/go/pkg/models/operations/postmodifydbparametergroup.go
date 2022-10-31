package operations

type PostModifyDbParameterGroupActionEnum string

const (
	PostModifyDbParameterGroupActionEnumModifyDbParameterGroup PostModifyDbParameterGroupActionEnum = "ModifyDBParameterGroup"
)

type PostModifyDbParameterGroupVersionEnum string

const (
	PostModifyDbParameterGroupVersionEnumTwoThousandAndThirteen0110 PostModifyDbParameterGroupVersionEnum = "2013-01-10"
)

type PostModifyDbParameterGroupQueryParams struct {
	Action  PostModifyDbParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyDbParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyDbParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyDbParameterGroupRequest struct {
	QueryParams PostModifyDbParameterGroupQueryParams
	Headers     PostModifyDbParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyDbParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
