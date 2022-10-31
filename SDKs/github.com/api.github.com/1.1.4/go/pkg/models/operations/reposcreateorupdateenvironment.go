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
	ID   *int64                             `json:"id,omitempty"`
	Type *shared.DeploymentReviewerTypeEnum `json:"type,omitempty"`
}

type ReposCreateOrUpdateEnvironmentRequestBody struct {
	DeploymentBranchPolicy *shared.DeploymentBranchPolicy                       `json:"deployment_branch_policy,omitempty"`
	Reviewers              []ReposCreateOrUpdateEnvironmentRequestBodyReviewers `json:"reviewers,omitempty"`
	WaitTimer              *int64                                               `json:"wait_timer,omitempty"`
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
