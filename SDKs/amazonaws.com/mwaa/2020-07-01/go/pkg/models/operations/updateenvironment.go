package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEnvironmentPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=Name"`
}

type UpdateEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateEnvironmentRequestBodyLoggingConfiguration struct {
	DagProcessingLogs *shared.ModuleLoggingConfigurationInput `json:"DagProcessingLogs"`
	SchedulerLogs     *shared.ModuleLoggingConfigurationInput `json:"SchedulerLogs"`
	TaskLogs          *shared.ModuleLoggingConfigurationInput `json:"TaskLogs"`
	WebserverLogs     *shared.ModuleLoggingConfigurationInput `json:"WebserverLogs"`
	WorkerLogs        *shared.ModuleLoggingConfigurationInput `json:"WorkerLogs"`
}

type UpdateEnvironmentRequestBodyNetworkConfiguration struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
}

type UpdateEnvironmentRequestBodyWebserverAccessModeEnum string

const (
	UpdateEnvironmentRequestBodyWebserverAccessModeEnumPrivateOnly UpdateEnvironmentRequestBodyWebserverAccessModeEnum = "PRIVATE_ONLY"
	UpdateEnvironmentRequestBodyWebserverAccessModeEnumPublicOnly  UpdateEnvironmentRequestBodyWebserverAccessModeEnum = "PUBLIC_ONLY"
)

type UpdateEnvironmentRequestBody struct {
	AirflowConfigurationOptions  map[string]string                                    `json:"AirflowConfigurationOptions"`
	AirflowVersion               *string                                              `json:"AirflowVersion"`
	DagS3Path                    *string                                              `json:"DagS3Path"`
	EnvironmentClass             *string                                              `json:"EnvironmentClass"`
	ExecutionRoleArn             *string                                              `json:"ExecutionRoleArn"`
	LoggingConfiguration         *UpdateEnvironmentRequestBodyLoggingConfiguration    `json:"LoggingConfiguration"`
	MaxWorkers                   *int64                                               `json:"MaxWorkers"`
	MinWorkers                   *int64                                               `json:"MinWorkers"`
	NetworkConfiguration         *UpdateEnvironmentRequestBodyNetworkConfiguration    `json:"NetworkConfiguration"`
	PluginsS3ObjectVersion       *string                                              `json:"PluginsS3ObjectVersion"`
	PluginsS3Path                *string                                              `json:"PluginsS3Path"`
	RequirementsS3ObjectVersion  *string                                              `json:"RequirementsS3ObjectVersion"`
	RequirementsS3Path           *string                                              `json:"RequirementsS3Path"`
	Schedulers                   *int64                                               `json:"Schedulers"`
	SourceBucketArn              *string                                              `json:"SourceBucketArn"`
	WebserverAccessMode          *UpdateEnvironmentRequestBodyWebserverAccessModeEnum `json:"WebserverAccessMode"`
	WeeklyMaintenanceWindowStart *string                                              `json:"WeeklyMaintenanceWindowStart"`
}

type UpdateEnvironmentRequest struct {
	PathParams UpdateEnvironmentPathParams
	Headers    UpdateEnvironmentHeaders
	Request    UpdateEnvironmentRequestBody `request:"mediaType=application/json"`
}

type UpdateEnvironmentResponse struct {
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateEnvironmentOutput   *shared.UpdateEnvironmentOutput
	ValidationException       *interface{}
}
