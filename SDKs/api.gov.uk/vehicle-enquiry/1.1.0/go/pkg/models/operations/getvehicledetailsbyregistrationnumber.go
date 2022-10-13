package operations

import (
	"openapi/pkg/models/shared"
)

type GetVehicleDetailsByRegistrationNumberHeaders struct {
	XCorrelationID *string `header:"name=X-Correlation-Id"`
	XAPIKey        string  `header:"name=x-api-key"`
}

type GetVehicleDetailsByRegistrationNumberRequest struct {
	Headers GetVehicleDetailsByRegistrationNumberHeaders
	Request shared.VehicleRequest `request:"mediaType=application/json"`
}

type GetVehicleDetailsByRegistrationNumberResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	Vehicle       *shared.Vehicle
}
