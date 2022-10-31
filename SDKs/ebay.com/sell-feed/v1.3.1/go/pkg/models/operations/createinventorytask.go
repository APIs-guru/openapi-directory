package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInventoryTaskHeaders struct {
	XEbayCMarketplaceID *string `header:"style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID"`
}

type CreateInventoryTaskSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type CreateInventoryTaskRequest struct {
	Headers  CreateInventoryTaskHeaders
	Request  shared.CreateInventoryTaskRequest `request:"mediaType=application/json"`
	Security CreateInventoryTaskSecurity
}

type CreateInventoryTaskResponse struct {
	ContentType string
	StatusCode  int64
}
