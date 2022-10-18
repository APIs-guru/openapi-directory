package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicantsAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ApplicantsAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ApplicantsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ApplicantsAddRequest struct {
	QueryParams ApplicantsAddQueryParams
	Headers     ApplicantsAddHeaders
	Request     shared.Applicant `request:"mediaType=application/json"`
	Security    ApplicantsAddSecurity
}

type ApplicantsAddResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	CreateApplicantResponse *shared.CreateApplicantResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
