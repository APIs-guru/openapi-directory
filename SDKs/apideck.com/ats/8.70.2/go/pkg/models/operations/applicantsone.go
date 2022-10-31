package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicantsOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ApplicantsOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ApplicantsOneHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type ApplicantsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ApplicantsOneRequest struct {
	PathParams  ApplicantsOnePathParams
	QueryParams ApplicantsOneQueryParams
	Headers     ApplicantsOneHeaders
	Security    ApplicantsOneSecurity
}

type ApplicantsOneResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetApplicantResponse    *shared.GetApplicantResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
