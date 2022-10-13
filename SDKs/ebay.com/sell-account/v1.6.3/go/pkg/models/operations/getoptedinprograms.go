package operations

import (
	"openapi/pkg/models/shared"
)

type GetOptedInProgramsSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetOptedInProgramsRequest struct {
	Security GetOptedInProgramsSecurity
}

type GetOptedInProgramsResponse struct {
	ContentType string
	Programs    *shared.Programs
	StatusCode  int64
}
