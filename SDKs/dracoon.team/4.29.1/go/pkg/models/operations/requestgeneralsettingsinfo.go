package operations

import (
	"openapi/pkg/models/shared"
)

type RequestGeneralSettingsInfoHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestGeneralSettingsInfoRequest struct {
	Headers RequestGeneralSettingsInfoHeaders
}

type RequestGeneralSettingsInfoResponse struct {
	ContentType         string
	ErrorResponse       *shared.ErrorResponse
	GeneralSettingsInfo *shared.GeneralSettingsInfo
	StatusCode          int64
}
