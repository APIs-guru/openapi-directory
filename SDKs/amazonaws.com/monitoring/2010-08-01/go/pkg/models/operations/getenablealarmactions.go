package operations

type GetEnableAlarmActionsActionEnum string

const (
	GetEnableAlarmActionsActionEnumEnableAlarmActions GetEnableAlarmActionsActionEnum = "EnableAlarmActions"
)

type GetEnableAlarmActionsVersionEnum string

const (
	GetEnableAlarmActionsVersionEnumTwoThousandAndTen0801 GetEnableAlarmActionsVersionEnum = "2010-08-01"
)

type GetEnableAlarmActionsQueryParams struct {
	Action     GetEnableAlarmActionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AlarmNames []string                         `queryParam:"style=form,explode=true,name=AlarmNames"`
	Version    GetEnableAlarmActionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetEnableAlarmActionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEnableAlarmActionsRequest struct {
	QueryParams GetEnableAlarmActionsQueryParams
	Headers     GetEnableAlarmActionsHeaders
}

type GetEnableAlarmActionsResponse struct {
	ContentType string
	StatusCode  int64
}
