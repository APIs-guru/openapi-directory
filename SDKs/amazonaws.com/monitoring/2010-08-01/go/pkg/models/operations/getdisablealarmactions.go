package operations

type GetDisableAlarmActionsActionEnum string

const (
	GetDisableAlarmActionsActionEnumDisableAlarmActions GetDisableAlarmActionsActionEnum = "DisableAlarmActions"
)

type GetDisableAlarmActionsVersionEnum string

const (
	GetDisableAlarmActionsVersionEnumTwoThousandAndTen0801 GetDisableAlarmActionsVersionEnum = "2010-08-01"
)

type GetDisableAlarmActionsQueryParams struct {
	Action     GetDisableAlarmActionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AlarmNames []string                          `queryParam:"style=form,explode=true,name=AlarmNames"`
	Version    GetDisableAlarmActionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisableAlarmActionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDisableAlarmActionsRequest struct {
	QueryParams GetDisableAlarmActionsQueryParams
	Headers     GetDisableAlarmActionsHeaders
}

type GetDisableAlarmActionsResponse struct {
	ContentType string
	StatusCode  int64
}
