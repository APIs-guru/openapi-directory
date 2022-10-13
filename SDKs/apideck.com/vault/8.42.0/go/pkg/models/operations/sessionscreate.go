package operations

import (
	"openapi/pkg/models/shared"
)

type SessionsCreateHeaders struct {
	XApideckAppID      string `header:"name=x-apideck-app-id"`
	XApideckConsumerID string `header:"name=x-apideck-consumer-id"`
}

type SessionsCreateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type SessionsCreateRequest struct {
	Headers  SessionsCreateHeaders
	Request  *shared.Session `request:"mediaType=application/json"`
	Security SessionsCreateSecurity
}

type SessionsCreateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	CreateSessionResponse   *shared.CreateSessionResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
