package operations

import (
	"openapi/pkg/models/shared"
)

type CreateCustomerServiceMetricTaskHeaders struct {
	AcceptLanguage string `header:"name=accept-language"`
}

type CreateCustomerServiceMetricTaskSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type CreateCustomerServiceMetricTaskRequest struct {
	Headers  CreateCustomerServiceMetricTaskHeaders
	Request  shared.CreateServiceMetricsTaskRequest `request:"mediaType=application/json"`
	Security CreateCustomerServiceMetricTaskSecurity
}

type CreateCustomerServiceMetricTaskResponse struct {
	ContentType string
	StatusCode  int64
}
