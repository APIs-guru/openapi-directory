package operations

type PostCopyDbParameterGroupActionEnum string

const (
	PostCopyDbParameterGroupActionEnumCopyDbParameterGroup PostCopyDbParameterGroupActionEnum = "CopyDBParameterGroup"
)

type PostCopyDbParameterGroupVersionEnum string

const (
	PostCopyDbParameterGroupVersionEnumTwoThousandAndFourteen0901 PostCopyDbParameterGroupVersionEnum = "2014-09-01"
)

type PostCopyDbParameterGroupQueryParams struct {
	Action  PostCopyDbParameterGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCopyDbParameterGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCopyDbParameterGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCopyDbParameterGroupRequest struct {
	QueryParams PostCopyDbParameterGroupQueryParams
	Headers     PostCopyDbParameterGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCopyDbParameterGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
