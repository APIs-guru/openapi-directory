package operations

import (
	"openapi/pkg/models/shared"
)

type DepartmentsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DepartmentsDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type DepartmentsDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type DepartmentsDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DepartmentsDeleteRequest struct {
	PathParams  DepartmentsDeletePathParams
	QueryParams DepartmentsDeleteQueryParams
	Headers     DepartmentsDeleteHeaders
	Security    DepartmentsDeleteSecurity
}

type DepartmentsDeleteResponse struct {
	BadRequestResponse       *interface{}
	ContentType              string
	DeleteDepartmentResponse *shared.DeleteDepartmentResponse
	NotFoundResponse         *interface{}
	PaymentRequiredResponse  *interface{}
	StatusCode               int64
	UnauthorizedResponse     *interface{}
	UnexpectedErrorResponse  *interface{}
	UnprocessableResponse    *interface{}
}
