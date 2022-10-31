package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSchedulePathParams struct {
	ScheduleID string `pathParam:"style=simple,explode=false,name=schedule_id"`
}

type UpdateScheduleSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type UpdateScheduleRequest struct {
	PathParams UpdateSchedulePathParams
	Request    shared.UpdateUserScheduleRequest `request:"mediaType=application/json"`
	Security   UpdateScheduleSecurity
}

type UpdateScheduleResponse struct {
	ContentType string
	StatusCode  int64
}
