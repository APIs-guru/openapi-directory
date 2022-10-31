package operations

type PostSetAlarmStateActionEnum string

const (
	PostSetAlarmStateActionEnumSetAlarmState PostSetAlarmStateActionEnum = "SetAlarmState"
)

type PostSetAlarmStateVersionEnum string

const (
	PostSetAlarmStateVersionEnumTwoThousandAndTen0801 PostSetAlarmStateVersionEnum = "2010-08-01"
)

type PostSetAlarmStateQueryParams struct {
	Action  PostSetAlarmStateActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostSetAlarmStateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostSetAlarmStateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostSetAlarmStateRequest struct {
	QueryParams PostSetAlarmStateQueryParams
	Headers     PostSetAlarmStateHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostSetAlarmStateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
