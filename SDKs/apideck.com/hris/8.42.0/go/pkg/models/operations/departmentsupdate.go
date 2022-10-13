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
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type DepartmentsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DepartmentsUpdateRequest struct {
	PathParams  DepartmentsUpdatePathParams
	QueryParams DepartmentsUpdateQueryParams
	Headers     DepartmentsUpdateHeaders
	Request     shared.Department `request:"mediaType=application/json"`
	Security    DepartmentsUpdateSecurity
}

type DepartmentsUpdateResponse struct {
	BadRequestResponse       *interface{}
	ContentType              string
	NotFoundResponse         *interface{}
	PaymentRequiredResponse  *interface{}
	StatusCode               int64
	UnauthorizedResponse     *interface{}
	UnexpectedErrorResponse  *interface{}
	UnprocessableResponse    *interface{}
	UpdateDepartmentResponse *shared.UpdateDepartmentResponse
}
