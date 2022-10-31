package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveCustomerPathParams struct {
	CustomerID int64 `pathParam:"style=simple,explode=false,name=customer_id"`
}

type RemoveCustomerHeaders struct {
	XSdsServiceToken *string `header:"style=simple,explode=false,name=X-Sds-Service-Token"`
}

type RemoveCustomerRequest struct {
	PathParams RemoveCustomerPathParams
	Headers    RemoveCustomerHeaders
}

type RemoveCustomerResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
