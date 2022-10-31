package operations

type PostModifyOptionGroupActionEnum string

const (
	PostModifyOptionGroupActionEnumModifyOptionGroup PostModifyOptionGroupActionEnum = "ModifyOptionGroup"
)

type PostModifyOptionGroupVersionEnum string

const (
	PostModifyOptionGroupVersionEnumTwoThousandAndThirteen0909 PostModifyOptionGroupVersionEnum = "2013-09-09"
)

type PostModifyOptionGroupQueryParams struct {
	Action  PostModifyOptionGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyOptionGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyOptionGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyOptionGroupRequest struct {
	QueryParams PostModifyOptionGroupQueryParams
	Headers     PostModifyOptionGroupHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyOptionGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
