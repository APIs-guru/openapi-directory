package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTaskHeaders struct {
	XEbayCMarketplaceID *string `header:"style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID"`
}

type CreateTaskSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type CreateTaskRequest struct {
	Headers  CreateTaskHeaders
	Request  shared.CreateTaskRequest `request:"mediaType=application/json"`
	Security CreateTaskSecurity
}

type CreateTaskResponse struct {
	ContentType string
	StatusCode  int64
}
