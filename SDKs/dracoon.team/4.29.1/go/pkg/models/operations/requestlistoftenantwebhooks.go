package operations

import (
	"openapi/pkg/models/shared"
)

type RequestListOfTenantWebhooksQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type RequestListOfTenantWebhooksHeaders struct {
	XSdsDateFormat   *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
	XSdsServiceToken *string      `header:"style=simple,explode=false,name=X-Sds-Service-Token"`
}

type RequestListOfTenantWebhooksRequest struct {
	QueryParams RequestListOfTenantWebhooksQueryParams
	Headers     RequestListOfTenantWebhooksHeaders
}

type RequestListOfTenantWebhooksResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	WebhookList   *shared.WebhookList
}
