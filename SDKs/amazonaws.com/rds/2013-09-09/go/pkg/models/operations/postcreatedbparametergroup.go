package operations

type PostCreateDbParameterGroupActionEnum string

const (
	PostCreateDbParameterGroupActionEnumCreateDbParameterGroup PostCreateDbParameterGroupActionEnum = "CreateDBParameterGroup"
)

type PostCreateDbParameterGroupVersionEnum string

const (
	PostCreateDbParameterGroupVersionEnumTwoThousandAndThirteen0909 PostCreateDbParameterGroupVersionEnum = "2013-09-09"
)

type PostCreateDbParameterGroupQueryParams struct {
	Action  PostCreateDbParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDbParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDbParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateDbParameterGroupRequest struct {
	QueryParams PostCreateDbParameterGroupQueryParams
	Headers     PostCreateDbParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDbParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
