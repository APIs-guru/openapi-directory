package operations

import (
	"openapi/pkg/models/shared"
)

type GetInventoryTaskPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=task_id"`
}

type GetInventoryTaskSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetInventoryTaskRequest struct {
	PathParams GetInventoryTaskPathParams
	Security   GetInventoryTaskSecurity
}

type GetInventoryTaskResponse struct {
	ContentType   string
	InventoryTask *shared.InventoryTask
	StatusCode    int64
}
