package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreateDeploymentStatusPathParams struct {
	DeploymentID int64  `pathParam:"style=simple,explode=false,name=deployment_id"`
	Owner        string `pathParam:"style=simple,explode=false,name=owner"`
	Repo         string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposCreateDeploymentStatusRequestBodyEnvironmentEnum string

const (
	ReposCreateDeploymentStatusRequestBodyEnvironmentEnumProduction ReposCreateDeploymentStatusRequestBodyEnvironmentEnum = "production"
	ReposCreateDeploymentStatusRequestBodyEnvironmentEnumStaging    ReposCreateDeploymentStatusRequestBodyEnvironmentEnum = "staging"
	ReposCreateDeploymentStatusRequestBodyEnvironmentEnumQa         ReposCreateDeploymentStatusRequestBodyEnvironmentEnum = "qa"
)

type ReposCreateDeploymentStatusRequestBodyStateEnum string

const (
	ReposCreateDeploymentStatusRequestBodyStateEnumError      ReposCreateDeploymentStatusRequestBodyStateEnum = "error"
	ReposCreateDeploymentStatusRequestBodyStateEnumFailure    ReposCreateDeploymentStatusRequestBodyStateEnum = "failure"
	ReposCreateDeploymentStatusRequestBodyStateEnumInactive   ReposCreateDeploymentStatusRequestBodyStateEnum = "inactive"
	ReposCreateDeploymentStatusRequestBodyStateEnumInProgress ReposCreateDeploymentStatusRequestBodyStateEnum = "in_progress"
	ReposCreateDeploymentStatusRequestBodyStateEnumQueued     ReposCreateDeploymentStatusRequestBodyStateEnum = "queued"
	ReposCreateDeploymentStatusRequestBodyStateEnumPending    ReposCreateDeploymentStatusRequestBodyStateEnum = "pending"
	ReposCreateDeploymentStatusRequestBodyStateEnumSuccess    ReposCreateDeploymentStatusRequestBodyStateEnum = "success"
)

type ReposCreateDeploymentStatusRequestBody struct {
	AutoInactive   *bool                                                  `json:"auto_inactive"`
	Description    *string                                                `json:"description"`
	Environment    *ReposCreateDeploymentStatusRequestBodyEnvironmentEnum `json:"environment"`
	EnvironmentURL *string                                                `json:"environment_url"`
	LogURL         *string                                                `json:"log_url"`
	State          ReposCreateDeploymentStatusRequestBodyStateEnum        `json:"state"`
	TargetURL      *string                                                `json:"target_url"`
}

type ReposCreateDeploymentStatusRequest struct {
	PathParams ReposCreateDeploymentStatusPathParams
	Request    *ReposCreateDeploymentStatusRequestBody `request:"mediaType=application/json"`
}

type ReposCreateDeploymentStatusResponse struct {
	ContentType      string
	Headers          map[string][]string
	StatusCode       int64
	DeploymentStatus *shared.DeploymentStatus
	ValidationError  *shared.ValidationError
}
