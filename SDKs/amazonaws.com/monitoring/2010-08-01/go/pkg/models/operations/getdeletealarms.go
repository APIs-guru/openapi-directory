package operations

type GetDeleteAlarmsActionEnum string

const (
	GetDeleteAlarmsActionEnumDeleteAlarms GetDeleteAlarmsActionEnum = "DeleteAlarms"
)

type GetDeleteAlarmsVersionEnum string

const (
	GetDeleteAlarmsVersionEnumTwoThousandAndTen0801 GetDeleteAlarmsVersionEnum = "2010-08-01"
)

type GetDeleteAlarmsQueryParams struct {
	Action     GetDeleteAlarmsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AlarmNames []string                   `queryParam:"style=form,explode=true,name=AlarmNames"`
	Version    GetDeleteAlarmsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteAlarmsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteAlarmsRequest struct {
	QueryParams GetDeleteAlarmsQueryParams
	Headers     GetDeleteAlarmsHeaders
}

type GetDeleteAlarmsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
