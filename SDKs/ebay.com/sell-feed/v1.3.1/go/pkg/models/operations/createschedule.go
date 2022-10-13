package operations

import (
	"openapi/pkg/models/shared"
)

type CreateScheduleSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type CreateScheduleRequest struct {
	Request  shared.CreateUserScheduleRequest `request:"mediaType=application/json"`
	Security CreateScheduleSecurity
}

type CreateScheduleResponse struct {
	ContentType                            string
	Headers                                map[string][]string
	StatusCode                             int64
	CreateSchedule201ApplicationJSONObject map[string]interface{}
}
