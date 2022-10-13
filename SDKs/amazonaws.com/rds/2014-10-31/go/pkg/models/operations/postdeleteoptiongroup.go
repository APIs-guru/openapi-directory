package operations

type PostDeleteOptionGroupActionEnum string

const (
	PostDeleteOptionGroupActionEnumDeleteOptionGroup PostDeleteOptionGroupActionEnum = "DeleteOptionGroup"
)

type PostDeleteOptionGroupVersionEnum string

const (
	PostDeleteOptionGroupVersionEnumTwoThousandAndFourteen1031 PostDeleteOptionGroupVersionEnum = "2014-10-31"
)

type PostDeleteOptionGroupQueryParams struct {
	Action  PostDeleteOptionGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteOptionGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteOptionGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteOptionGroupRequest struct {
	QueryParams PostDeleteOptionGroupQueryParams
	Headers     PostDeleteOptionGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteOptionGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
