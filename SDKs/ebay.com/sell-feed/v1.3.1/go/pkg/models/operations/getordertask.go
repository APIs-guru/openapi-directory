package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrderTaskPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=task_id"`
}

type GetOrderTaskSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetOrderTaskRequest struct {
	PathParams GetOrderTaskPathParams
	Security   GetOrderTaskSecurity
}

type GetOrderTaskResponse struct {
	ContentType string
	OrderTask   *shared.OrderTask
	StatusCode  int64
}
