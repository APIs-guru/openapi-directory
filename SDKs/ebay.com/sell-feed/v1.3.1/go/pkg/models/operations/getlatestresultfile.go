package operations

import (
	"openapi/pkg/models/shared"
)

type GetLatestResultFilePathParams struct {
	ScheduleID string `pathParam:"style=simple,explode=false,name=schedule_id"`
}

type GetLatestResultFileSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetLatestResultFileRequest struct {
	PathParams GetLatestResultFilePathParams
	Security   GetLatestResultFileSecurity
}

type GetLatestResultFileResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
