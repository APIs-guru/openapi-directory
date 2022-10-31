package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsReviewPendingDeploymentsForRunPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
	RunID int64  `pathParam:"style=simple,explode=false,name=run_id"`
}

type ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum string

const (
	ActionsReviewPendingDeploymentsForRunRequestBodyStateEnumApproved ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum = "approved"
	ActionsReviewPendingDeploymentsForRunRequestBodyStateEnumRejected ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum = "rejected"
)

type ActionsReviewPendingDeploymentsForRunRequestBody struct {
	Comment        string                                                    `json:"comment"`
	EnvironmentIds []int64                                                   `json:"environment_ids"`
	State          ActionsReviewPendingDeploymentsForRunRequestBodyStateEnum `json:"state"`
}

type ActionsReviewPendingDeploymentsForRunRequest struct {
	PathParams ActionsReviewPendingDeploymentsForRunPathParams
	Request    *ActionsReviewPendingDeploymentsForRunRequestBody `request:"mediaType=application/json"`
}

type ActionsReviewPendingDeploymentsForRunResponse struct {
	ContentType string
	StatusCode  int64
	Deployments []shared.Deployment
}
