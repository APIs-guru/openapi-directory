package operations

type PostDeleteDbParameterGroupActionEnum string

const (
	PostDeleteDbParameterGroupActionEnumDeleteDbParameterGroup PostDeleteDbParameterGroupActionEnum = "DeleteDBParameterGroup"
)

type PostDeleteDbParameterGroupVersionEnum string

const (
	PostDeleteDbParameterGroupVersionEnumTwoThousandAndThirteen0909 PostDeleteDbParameterGroupVersionEnum = "2013-09-09"
)

type PostDeleteDbParameterGroupQueryParams struct {
	Action  PostDeleteDbParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDbParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDbParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteDbParameterGroupRequest struct {
	QueryParams PostDeleteDbParameterGroupQueryParams
	Headers     PostDeleteDbParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDbParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
