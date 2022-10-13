package operations

import (
	"openapi/pkg/models/shared"
)

type RequestListOfEventTypesForConfigManagerHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestListOfEventTypesForConfigManagerRequest struct {
	Headers RequestListOfEventTypesForConfigManagerHeaders
}

type RequestListOfEventTypesForConfigManagerResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	EventTypeList *shared.EventTypeList
	StatusCode    int64
}
