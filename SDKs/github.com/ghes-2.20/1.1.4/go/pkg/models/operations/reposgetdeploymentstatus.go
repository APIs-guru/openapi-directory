package operations

import (
	"openapi/pkg/models/shared"
)

type ReposGetDeploymentStatusPathParams struct {
	DeploymentID int64  `pathParam:"style=simple,explode=false,name=deployment_id"`
	Owner        string `pathParam:"style=simple,explode=false,name=owner"`
	Repo         string `pathParam:"style=simple,explode=false,name=repo"`
	StatusID     int64  `pathParam:"style=simple,explode=false,name=status_id"`
}

type ReposGetDeploymentStatusRequest struct {
	PathParams ReposGetDeploymentStatusPathParams
}

type ReposGetDeploymentStatus415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReposGetDeploymentStatusResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	BasicError                                       *shared.BasicError
	DeploymentStatus                                 *shared.DeploymentStatus
	ReposGetDeploymentStatus415ApplicationJSONObject *ReposGetDeploymentStatus415ApplicationJSON
}
