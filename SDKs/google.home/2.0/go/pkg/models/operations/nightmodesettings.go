package operations

import (
	"openapi/pkg/models/shared"
)

type NightModesettingsRequest struct {
	Request shared.NightModesettingsRequest `request:"mediaType=application/json"`
}

type NightModesettingsResponse struct {
	ContentType string
	Example17   *shared.Example17
	StatusCode  int64
}
