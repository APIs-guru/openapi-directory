package operations

type PostCreateOptionGroupActionEnum string

const (
	PostCreateOptionGroupActionEnumCreateOptionGroup PostCreateOptionGroupActionEnum = "CreateOptionGroup"
)

type PostCreateOptionGroupVersionEnum string

const (
	PostCreateOptionGroupVersionEnumTwoThousandAndThirteen0909 PostCreateOptionGroupVersionEnum = "2013-09-09"
)

type PostCreateOptionGroupQueryParams struct {
	Action  PostCreateOptionGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateOptionGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateOptionGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
