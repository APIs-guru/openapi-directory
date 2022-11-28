package operations

import (
	"openapi/pkg/models/shared"
)

type DepartmentsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DepartmentsUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type DepartmentsUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type DepartmentsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DepartmentsUpdateRequest struct {
	PathParams  DepartmentsUpdatePathParams
	QueryParams DepartmentsUpdateQueryParams
	Headers     DepartmentsUpdateHeaders
	Request     shared.DepartmentInput `request:"mediaType=application/json"`
	Security    DepartmentsUpdateSecurity
}

type DepartmentsUpdateResponse struct {
	BadRequestResponse       *shared.BadRequestResponse
	ContentType              string
	NotFoundResponse         *shared.NotFoundResponse
	PaymentRequiredResponse  *shared.PaymentRequiredResponse
	StatusCode               int64
	UnauthorizedResponse     *shared.UnauthorizedResponse
	UnexpectedErrorResponse  *shared.UnexpectedErrorResponse
	UnprocessableResponse    *shared.UnprocessableResponse
	UpdateDepartmentResponse *shared.UpdateDepartmentResponse
}
