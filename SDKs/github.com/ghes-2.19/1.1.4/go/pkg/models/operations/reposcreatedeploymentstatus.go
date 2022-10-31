package operations

import (
"openapi/pkg/models/shared")

type ReposCreateDeploymentStatusPathParams struct {
    DeploymentID int64 `pathParam:"style=simple,explode=false,name=deployment_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}


type ReposCreateDeploymentStatusRequestBodyEnvironmentEnum string

const (
    ReposCreateDeploymentStatusRequestBodyEnvironmentEnumProduction ReposCreateDeploymentStatusRequestBodyEnvironmentEnum = "production"
ReposCreateDeploymentStatusRequestBodyEnvironmentEnumStaging ReposCreateDeploymentStatusRequestBodyEnvironmentEnum = "staging"
ReposCreateDeploymentStatusRequestBodyEnvironmentEnumQa ReposCreateDeploymentStatusRequestBodyEnvironmentEnum = "qa"
)



type ReposCreateDeploymentStatusRequestBodyStateEnum string

const (
    ReposCreateDeploymentStatusRequestBodyStateEnumError ReposCreateDeploymentStatusRequestBodyStateEnum = "error"
ReposCreateDeploymentStatusRequestBodyStateEnumFailure ReposCreateDeploymentStatusRequestBodyStateEnum = "failure"
ReposCreateDeploymentStatusRequestBodyStateEnumInactive ReposCreateDeploymentStatusRequestBodyStateEnum = "inactive"
ReposCreateDeploymentStatusRequestBodyStateEnumInProgress ReposCreateDeploymentStatusRequestBodyStateEnum = "in_progress"
ReposCreateDeploymentStatusRequestBodyStateEnumQueued ReposCreateDeploymentStatusRequestBodyStateEnum = "queued"
ReposCreateDeploymentStatusRequestBodyStateEnumPending ReposCreateDeploymentStatusRequestBodyStateEnum = "pending"
ReposCreateDeploymentStatusRequestBodyStateEnumSuccess ReposCreateDeploymentStatusRequestBodyStateEnum = "success"
)


type ReposCreateDeploymentStatusRequestBody struct {
    AutoInactive *bool `json:"auto_inactive,omitempty"`
    Description *string `json:"description,omitempty"`
    Environment *ReposCreateDeploymentStatusRequestBodyEnvironmentEnum `json:"environment,omitempty"`
    EnvironmentURL *string `json:"environment_url,omitempty"`
    LogURL *string `json:"log_url,omitempty"`
    State ReposCreateDeploymentStatusRequestBodyStateEnum `json:"state"`
    TargetURL *string `json:"target_url,omitempty"`
    
}

type ReposCreateDeploymentStatusRequest struct {
    PathParams ReposCreateDeploymentStatusPathParams 
    Request *ReposCreateDeploymentStatusRequestBody `request:"mediaType=application/json"`
    
}

type ReposCreateDeploymentStatusResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeploymentStatus *shared.DeploymentStatus 
    ValidationError *shared.ValidationError 
    
}

