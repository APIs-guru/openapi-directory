package operations

import (
	"openapi/pkg/models/shared"
)

type RequestInfrastructurePropertiesHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type RequestInfrastructurePropertiesRequest struct {
	Headers RequestInfrastructurePropertiesHeaders
}

type RequestInfrastructurePropertiesResponse struct {
	ContentType              string
	ErrorResponse            *shared.ErrorResponse
	InfrastructureProperties *shared.InfrastructureProperties
	StatusCode               int64
}
