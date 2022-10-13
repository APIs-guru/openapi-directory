package operations

import (
	"openapi/pkg/models/shared"
)

type ReposListWebhooksPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposListWebhooksQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ReposListWebhooksRequest struct {
	PathParams  ReposListWebhooksPathParams
	QueryParams ReposListWebhooksQueryParams
}

type ReposListWebhooksResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	BasicError  *shared.BasicError
	Hooks       []shared.Hook
}
