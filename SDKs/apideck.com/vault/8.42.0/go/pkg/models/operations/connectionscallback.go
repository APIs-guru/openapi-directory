package operations

type ConnectionsCallbackQueryParams struct {
	Code  string `queryParam:"style=form,explode=true,name=code"`
	State string `queryParam:"style=form,explode=true,name=state"`
}

type ConnectionsCallbackRequest struct {
	QueryParams ConnectionsCallbackQueryParams
}

type ConnectionsCallbackResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
