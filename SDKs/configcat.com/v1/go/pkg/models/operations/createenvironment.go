package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEnvironmentPathParams struct {
	ProductID string `pathParam:"style=simple,explode=false,name=productId"`
}

type CreateEnvironmentRequests struct {
	CreateEnvironmentModel  *shared.CreateEnvironmentModel `request:"mediaType=application/*+json"`
	CreateEnvironmentModel1 *shared.CreateEnvironmentModel `request:"mediaType=application/json"`
	CreateEnvironmentModel2 *shared.CreateEnvironmentModel `request:"mediaType=text/json"`
}

type CreateEnvironmentRequest struct {
	PathParams CreateEnvironmentPathParams
	Request    CreateEnvironmentRequests
}

type CreateEnvironmentResponse struct {
	ContentType             string
	EnvironmentModel        *shared.EnvironmentModel
	EnvironmentModelHaljson *shared.EnvironmentModelHaljson
	StatusCode              int64
}
