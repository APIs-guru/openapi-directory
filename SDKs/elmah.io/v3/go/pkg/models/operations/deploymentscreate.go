package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentsCreateRequests struct {
	CreateDeployment  *shared.CreateDeployment `request:"mediaType=application/*+json"`
	CreateDeployment1 *shared.CreateDeployment `request:"mediaType=application/json"`
	CreateDeployment2 *shared.CreateDeployment `request:"mediaType=application/json-patch+json"`
	CreateDeployment3 *shared.CreateDeployment `request:"mediaType=text/json"`
}

type DeploymentsCreateRequest struct {
	Request *DeploymentsCreateRequests
}

type DeploymentsCreateResponse struct {
	Body                   []byte
	ContentType            string
	CreateDeploymentResult *shared.CreateDeploymentResult
	StatusCode             int64
}
