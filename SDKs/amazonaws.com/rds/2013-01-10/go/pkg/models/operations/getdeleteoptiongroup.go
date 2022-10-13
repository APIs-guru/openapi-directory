package operations

type GetDeleteOptionGroupActionEnum string

const (
	GetDeleteOptionGroupActionEnumDeleteOptionGroup GetDeleteOptionGroupActionEnum = "DeleteOptionGroup"
)

type GetDeleteOptionGroupVersionEnum string

const (
	GetDeleteOptionGroupVersionEnumTwoThousandAndThirteen0110 GetDeleteOptionGroupVersionEnum = "2013-01-10"
)

type GetDeleteOptionGroupQueryParams struct {
	Action          GetDeleteOptionGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	OptionGroupName string                          `queryParam:"style=form,explode=true,name=OptionGroupName"`
	Version         GetDeleteOptionGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteOptionGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteOptionGroupRequest struct {
	QueryParams GetDeleteOptionGroupQueryParams
	Headers     GetDeleteOptionGroupHeaders
}

type GetDeleteOptionGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
