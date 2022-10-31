package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGeneralSettingsHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type UpdateGeneralSettingsRequest struct {
	Headers UpdateGeneralSettingsHeaders
	Request shared.UpdateGeneralSettings `request:"mediaType=application/json"`
}

type UpdateGeneralSettingsResponse struct {
	ContentType     string
	ErrorResponse   *shared.ErrorResponse
	GeneralSettings *shared.GeneralSettings
	StatusCode      int64
}
