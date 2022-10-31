package operations

import (
	"openapi/pkg/models/shared"
)

type GetEnvironmentPathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type GetEnvironmentRequest struct {
	PathParams GetEnvironmentPathParams
}

type GetEnvironmentResponse struct {
	ContentType             string
	EnvironmentModel        *shared.EnvironmentModel
	EnvironmentModelHaljson *shared.EnvironmentModelHaljson
	StatusCode              int64
}
