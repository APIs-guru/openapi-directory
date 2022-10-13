package operations

type GetCreateOptionGroupActionEnum string

const (
	GetCreateOptionGroupActionEnumCreateOptionGroup GetCreateOptionGroupActionEnum = "CreateOptionGroup"
)

type GetCreateOptionGroupVersionEnum string

const (
	GetCreateOptionGroupVersionEnumTwoThousandAndThirteen0212 GetCreateOptionGroupVersionEnum = "2013-02-12"
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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
