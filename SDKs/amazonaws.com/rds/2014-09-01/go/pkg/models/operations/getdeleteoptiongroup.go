package operations

type GetDeleteOptionGroupActionEnum string

const (
	GetDeleteOptionGroupActionEnumDeleteOptionGroup GetDeleteOptionGroupActionEnum = "DeleteOptionGroup"
)

type GetDeleteOptionGroupVersionEnum string

const (
	GetDeleteOptionGroupVersionEnumTwoThousandAndFourteen0901 GetDeleteOptionGroupVersionEnum = "2014-09-01"
)

type GetDeleteOptionGroupQueryParams struct {
	Action          GetDeleteOptionGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	OptionGroupName string                          `queryParam:"style=form,explode=true,name=OptionGroupName"`
	Version         GetDeleteOptionGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteOptionGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
