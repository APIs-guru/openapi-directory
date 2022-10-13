package operations

import (
	"openapi/pkg/models/shared"
)

type GetVolumesFsJSONHeaders struct {
	XAuthProjectID string `header:"name=X-Auth-Project-Id"`
	XAuthToken     string `header:"name=X-Auth-Token"`
}

type GetVolumesFsJSONRequest struct {
	Headers GetVolumesFsJSONHeaders
}

type GetVolumesFsJSONResponse struct {
	ContentType string
	Fileshares  []shared.Fileshare
	StatusCode  int64
}
