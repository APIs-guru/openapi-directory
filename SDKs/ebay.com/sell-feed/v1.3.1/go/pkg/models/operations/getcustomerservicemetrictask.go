package operations

import (
	"openapi/pkg/models/shared"
)

type GetCustomerServiceMetricTaskPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=task_id"`
}

type GetCustomerServiceMetricTaskSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetCustomerServiceMetricTaskRequest struct {
	PathParams GetCustomerServiceMetricTaskPathParams
	Security   GetCustomerServiceMetricTaskSecurity
}

type GetCustomerServiceMetricTaskResponse struct {
	ContentType        string
	ServiceMetricsTask *shared.ServiceMetricsTask
	StatusCode         int64
}
