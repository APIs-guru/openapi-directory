package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateOrUpdateEnvironmentPathParams struct {
	EnvironmentName string `pathParam:"style=simple,explode=false,name=environment_name"`
	Owner           string `pathParam:"style=simple,explode=false,name=owner"`
	Repo            string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposCreateOrUpdateEnvironmentRequestBodyReviewers struct {
	ID   *int64                             `json:"id"`
	Type *shared.DeploymentReviewerTypeEnum `json:"type"`
}

type ReposCreateOrUpdateEnvironmentRequestBody struct {
	DeploymentBranchPolicy *shared.DeploymentBranchPolicy                       `json:"deployment_branch_policy"`
	Reviewers              []ReposCreateOrUpdateEnvironmentRequestBodyReviewers `json:"reviewers"`
	WaitTimer              *int64                                               `json:"wait_timer"`
}

type ReposCreateOrUpdateEnvironmentRequest struct {
	PathParams ReposCreateOrUpdateEnvironmentPathParams
	Request    *ReposCreateOrUpdateEnvironmentRequestBody `request:"mediaType=application/json"`
}

type ReposCreateOrUpdateEnvironmentResponse struct {
	ContentType string
	StatusCode  int64
	BasicError  *shared.BasicError
	Environment *shared.Environment
}
