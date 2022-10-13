package operations

type PostModifyDbParameterGroupActionEnum string

const (
	PostModifyDbParameterGroupActionEnumModifyDbParameterGroup PostModifyDbParameterGroupActionEnum = "ModifyDBParameterGroup"
)

type PostModifyDbParameterGroupVersionEnum string

const (
	PostModifyDbParameterGroupVersionEnumTwoThousandAndFourteen0901 PostModifyDbParameterGroupVersionEnum = "2014-09-01"
)

type PostModifyDbParameterGroupQueryParams struct {
	Action  PostModifyDbParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyDbParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyDbParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
