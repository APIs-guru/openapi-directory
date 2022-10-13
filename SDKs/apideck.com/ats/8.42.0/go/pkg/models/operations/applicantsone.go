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
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
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
	BadRequestResponse      *interface{}
	ContentType             string
	GetApplicantResponse    *shared.GetApplicantResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
