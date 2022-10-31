package operations

import (
	"openapi/pkg/models/shared"
)

type ListWebhooksQueryParams struct {
	CurrentPage *int64  `queryParam:"style=form,explode=true,name=currentPage"`
	Events      *string `queryParam:"style=form,explode=true,name=events"`
	PageSize    *int64  `queryParam:"style=form,explode=true,name=pageSize"`
}

type ListWebhooksSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type ListWebhooksRequest struct {
	QueryParams ListWebhooksQueryParams
	Security    ListWebhooksSecurity
}

type ListWebhooksResponse struct {
	ContentType          string
	StatusCode           int64
	WebhooksListResponse *shared.WebhooksListResponse
}
