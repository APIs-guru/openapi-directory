package operations

import (
	"openapi/pkg/models/shared"
)

type DeploymentsGetAllResponse struct {
	Body        []byte
	ContentType string
	Deployments []shared.Deployment
	StatusCode  int64
}
