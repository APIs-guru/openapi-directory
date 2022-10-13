package operations

import (
	"openapi/pkg/models/shared"
)

type ApplicantsAllQueryParams struct {
	Cursor *string            `queryParam:"style=form,explode=true,name=cursor"`
	Filter *shared.JobsFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64             `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool              `queryParam:"style=form,explode=true,name=raw"`
}

type ApplicantsAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ApplicantsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ApplicantsAllRequest struct {
	QueryParams ApplicantsAllQueryParams
	Headers     ApplicantsAllHeaders
	Security    ApplicantsAllSecurity
}

type ApplicantsAllResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetApplicantsResponse   *shared.GetApplicantsResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
