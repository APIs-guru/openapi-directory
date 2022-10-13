package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEnvironmentPathParams struct {
	EnvironmentID string `pathParam:"style=simple,explode=false,name=environmentId"`
}

type UpdateEnvironmentRequests struct {
	UpdateEnvironmentModel  *shared.UpdateEnvironmentModel `request:"mediaType=application/*+json"`
	UpdateEnvironmentModel1 *shared.UpdateEnvironmentModel `request:"mediaType=application/json"`
	UpdateEnvironmentModel2 *shared.UpdateEnvironmentModel `request:"mediaType=text/json"`
}

type UpdateEnvironmentRequest struct {
	PathParams UpdateEnvironmentPathParams
	Request    UpdateEnvironmentRequests
}

type UpdateEnvironmentResponse struct {
	ContentType             string
	EnvironmentModel        *shared.EnvironmentModel
	EnvironmentModelHaljson *shared.EnvironmentModelHaljson
	StatusCode              int64
}
