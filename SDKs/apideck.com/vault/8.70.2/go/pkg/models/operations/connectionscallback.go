package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectionsCallbackQueryParams struct {
	Code  string `queryParam:"style=form,explode=true,name=code"`
	State string `queryParam:"style=form,explode=true,name=state"`
}

type ConnectionsCallbackRequest struct {
	QueryParams ConnectionsCallbackQueryParams
}

type ConnectionsCallbackResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
