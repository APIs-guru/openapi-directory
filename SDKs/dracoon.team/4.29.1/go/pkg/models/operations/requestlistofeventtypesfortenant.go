package operations

import (
	"openapi/pkg/models/shared"
)

type RequestListOfEventTypesForTenantHeaders struct {
	XSdsServiceToken *string `header:"name=X-Sds-Service-Token"`
}

type RequestListOfEventTypesForTenantRequest struct {
	Headers RequestListOfEventTypesForTenantHeaders
}

type RequestListOfEventTypesForTenantResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	EventTypeList *shared.EventTypeList
	StatusCode    int64
}
