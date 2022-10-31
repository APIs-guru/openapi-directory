package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWebhooksIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteWebhooksIDRequest struct {
	PathParams DeleteWebhooksIDPathParams
}

type DeleteWebhooksIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
