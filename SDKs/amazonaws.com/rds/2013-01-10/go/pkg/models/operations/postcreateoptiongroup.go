package operations

type PostCreateOptionGroupActionEnum string

const (
	PostCreateOptionGroupActionEnumCreateOptionGroup PostCreateOptionGroupActionEnum = "CreateOptionGroup"
)

type PostCreateOptionGroupVersionEnum string

const (
	PostCreateOptionGroupVersionEnumTwoThousandAndThirteen0110 PostCreateOptionGroupVersionEnum = "2013-01-10"
)

type PostCreateOptionGroupQueryParams struct {
	Action  PostCreateOptionGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateOptionGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateOptionGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateOptionGroupRequest struct {
	QueryParams PostCreateOptionGroupQueryParams
	Headers     PostCreateOptionGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateOptionGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
