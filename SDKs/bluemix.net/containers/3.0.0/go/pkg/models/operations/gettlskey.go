package operations

import (
	"openapi/pkg/models/shared"
)

type GetTlskeyHeaders struct {
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	XAuthToken     string `header:"style=simple,explode=false,name=X-Auth-Token"`
}

type GetTlskeyRequest struct {
	Headers GetTlskeyHeaders
}

type GetTlskeyResponse struct {
	Certificate *shared.Certificate
	ContentType string
	StatusCode  int64
}
