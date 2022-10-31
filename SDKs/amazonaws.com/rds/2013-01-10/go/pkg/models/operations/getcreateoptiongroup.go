package operations

type GetCreateOptionGroupActionEnum string

const (
	GetCreateOptionGroupActionEnumCreateOptionGroup GetCreateOptionGroupActionEnum = "CreateOptionGroup"
)

type GetCreateOptionGroupVersionEnum string

const (
	GetCreateOptionGroupVersionEnumTwoThousandAndThirteen0110 GetCreateOptionGroupVersionEnum = "2013-01-10"
)

type GetCreateOptionGroupQueryParams struct {
	Action                 GetCreateOptionGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	EngineName             string                          `queryParam:"style=form,explode=true,name=EngineName"`
	MajorEngineVersion     string                          `queryParam:"style=form,explode=true,name=MajorEngineVersion"`
	OptionGroupDescription string                          `queryParam:"style=form,explode=true,name=OptionGroupDescription"`
	OptionGroupName        string                          `queryParam:"style=form,explode=true,name=OptionGroupName"`
	Version                GetCreateOptionGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateOptionGroupHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCreateOptionGroupRequest struct {
	QueryParams GetCreateOptionGroupQueryParams
	Headers     GetCreateOptionGroupHeaders
}

type GetCreateOptionGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
