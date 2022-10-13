package operations

type PostCopyOptionGroupActionEnum string

const (
	PostCopyOptionGroupActionEnumCopyOptionGroup PostCopyOptionGroupActionEnum = "CopyOptionGroup"
)

type PostCopyOptionGroupVersionEnum string

const (
	PostCopyOptionGroupVersionEnumTwoThousandAndFourteen1031 PostCopyOptionGroupVersionEnum = "2014-10-31"
)

type PostCopyOptionGroupQueryParams struct {
	Action  PostCopyOptionGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCopyOptionGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCopyOptionGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCopyOptionGroupRequest struct {
	QueryParams PostCopyOptionGroupQueryParams
	Headers     PostCopyOptionGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCopyOptionGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
