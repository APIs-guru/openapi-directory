package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEnvironmentPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=Name"`
}

type CreateEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateEnvironmentRequestBodyLoggingConfiguration struct {
	DagProcessingLogs *shared.ModuleLoggingConfigurationInput `json:"DagProcessingLogs"`
	SchedulerLogs     *shared.ModuleLoggingConfigurationInput `json:"SchedulerLogs"`
	TaskLogs          *shared.ModuleLoggingConfigurationInput `json:"TaskLogs"`
	WebserverLogs     *shared.ModuleLoggingConfigurationInput `json:"WebserverLogs"`
	WorkerLogs        *shared.ModuleLoggingConfigurationInput `json:"WorkerLogs"`
}

type CreateEnvironmentRequestBodyNetworkConfiguration struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
}

type CreateEnvironmentRequestBodyWebserverAccessModeEnum string

const (
	CreateEnvironmentRequestBodyWebserverAccessModeEnumPrivateOnly CreateEnvironmentRequestBodyWebserverAccessModeEnum = "PRIVATE_ONLY"
	CreateEnvironmentRequestBodyWebserverAccessModeEnumPublicOnly  CreateEnvironmentRequestBodyWebserverAccessModeEnum = "PUBLIC_ONLY"
)

type CreateEnvironmentRequestBody struct {
	AirflowConfigurationOptions  map[string]string                                    `json:"AirflowConfigurationOptions"`
	AirflowVersion               *string                                              `json:"AirflowVersion"`
	DagS3Path                    string                                               `json:"DagS3Path"`
	EnvironmentClass             *string                                              `json:"EnvironmentClass"`
	ExecutionRoleArn             string                                               `json:"ExecutionRoleArn"`
	KmsKey                       *string                                              `json:"KmsKey"`
	LoggingConfiguration         *CreateEnvironmentRequestBodyLoggingConfiguration    `json:"LoggingConfiguration"`
	MaxWorkers                   *int64                                               `json:"MaxWorkers"`
	MinWorkers                   *int64                                               `json:"MinWorkers"`
	NetworkConfiguration         CreateEnvironmentRequestBodyNetworkConfiguration     `json:"NetworkConfiguration"`
	PluginsS3ObjectVersion       *string                                              `json:"PluginsS3ObjectVersion"`
	PluginsS3Path                *string                                              `json:"PluginsS3Path"`
	RequirementsS3ObjectVersion  *string                                              `json:"RequirementsS3ObjectVersion"`
	RequirementsS3Path           *string                                              `json:"RequirementsS3Path"`
	Schedulers                   *int64                                               `json:"Schedulers"`
	SourceBucketArn              string                                               `json:"SourceBucketArn"`
	Tags                         map[string]string                                    `json:"Tags"`
	WebserverAccessMode          *CreateEnvironmentRequestBodyWebserverAccessModeEnum `json:"WebserverAccessMode"`
	WeeklyMaintenanceWindowStart *string                                              `json:"WeeklyMaintenanceWindowStart"`
}

type CreateEnvironmentRequest struct {
	PathParams CreateEnvironmentPathParams
	Headers    CreateEnvironmentHeaders
	Request    CreateEnvironmentRequestBody `request:"mediaType=application/json"`
}

type CreateEnvironmentResponse struct {
	ContentType             string
	CreateEnvironmentOutput *shared.CreateEnvironmentOutput
	InternalServerException *interface{}
	StatusCode              int64
	ValidationException     *interface{}
}
