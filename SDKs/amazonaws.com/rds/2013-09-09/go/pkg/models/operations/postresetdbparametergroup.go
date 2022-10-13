package operations

type PostResetDbParameterGroupActionEnum string

const (
	PostResetDbParameterGroupActionEnumResetDbParameterGroup PostResetDbParameterGroupActionEnum = "ResetDBParameterGroup"
)

type PostResetDbParameterGroupVersionEnum string

const (
	PostResetDbParameterGroupVersionEnumTwoThousandAndThirteen0909 PostResetDbParameterGroupVersionEnum = "2013-09-09"
)

type PostResetDbParameterGroupQueryParams struct {
	Action  PostResetDbParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostResetDbParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostResetDbParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostResetDbParameterGroupRequest struct {
	QueryParams PostResetDbParameterGroupQueryParams
	Headers     PostResetDbParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostResetDbParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
