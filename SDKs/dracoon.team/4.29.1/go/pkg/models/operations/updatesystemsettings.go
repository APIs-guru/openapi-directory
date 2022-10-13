package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSystemSettingsHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type UpdateSystemSettingsRequest struct {
	Headers UpdateSystemSettingsHeaders
	Request shared.ConfigOptionList `request:"mediaType=application/json"`
}

type UpdateSystemSettingsResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
}
