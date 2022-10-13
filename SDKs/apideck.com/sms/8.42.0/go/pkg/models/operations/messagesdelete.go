package operations

import (
	"openapi/pkg/models/shared"
)

type MessagesDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MessagesDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type MessagesDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type MessagesDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type MessagesDeleteRequest struct {
	PathParams  MessagesDeletePathParams
	QueryParams MessagesDeleteQueryParams
	Headers     MessagesDeleteHeaders
	Security    MessagesDeleteSecurity
}

type MessagesDeleteResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	DeleteMessageResponse   *shared.DeleteMessageResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
