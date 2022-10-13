package operations

import (
	"openapi/pkg/models/shared"
)

type GetResultFilePathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=task_id"`
}

type GetResultFileSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetResultFileRequest struct {
	PathParams GetResultFilePathParams
	Security   GetResultFileSecurity
}

type GetResultFileResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
