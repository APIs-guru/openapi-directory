package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEnvironmentPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=Name"`
}

type CreateEnvironmentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateEnvironmentRequestBodyLoggingConfiguration struct {
	DagProcessingLogs *shared.ModuleLoggingConfigurationInput `json:"DagProcessingLogs,omitempty"`
	SchedulerLogs     *shared.ModuleLoggingConfigurationInput `json:"SchedulerLogs,omitempty"`
	TaskLogs          *shared.ModuleLoggingConfigurationInput `json:"TaskLogs,omitempty"`
	WebserverLogs     *shared.ModuleLoggingConfigurationInput `json:"WebserverLogs,omitempty"`
	WorkerLogs        *shared.ModuleLoggingConfigurationInput `json:"WorkerLogs,omitempty"`
}

type CreateEnvironmentRequestBodyNetworkConfiguration struct {
	SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
	SubnetIds        []string `json:"SubnetIds,omitempty"`
}

type CreateEnvironmentRequestBodyWebserverAccessModeEnum string

const (
	CreateEnvironmentRequestBodyWebserverAccessModeEnumPrivateOnly CreateEnvironmentRequestBodyWebserverAccessModeEnum = "PRIVATE_ONLY"
	CreateEnvironmentRequestBodyWebserverAccessModeEnumPublicOnly  CreateEnvironmentRequestBodyWebserverAccessModeEnum = "PUBLIC_ONLY"
)

type CreateEnvironmentRequestBody struct {
	AirflowConfigurationOptions  map[string]string                                    `json:"AirflowConfigurationOptions,omitempty"`
	AirflowVersion               *string                                              `json:"AirflowVersion,omitempty"`
	DagS3Path                    string                                               `json:"DagS3Path"`
	EnvironmentClass             *string                                              `json:"EnvironmentClass,omitempty"`
	ExecutionRoleArn             string                                               `json:"ExecutionRoleArn"`
	KmsKey                       *string                                              `json:"KmsKey,omitempty"`
	LoggingConfiguration         *CreateEnvironmentRequestBodyLoggingConfiguration    `json:"LoggingConfiguration,omitempty"`
	MaxWorkers                   *int64                                               `json:"MaxWorkers,omitempty"`
	MinWorkers                   *int64                                               `json:"MinWorkers,omitempty"`
	NetworkConfiguration         CreateEnvironmentRequestBodyNetworkConfiguration     `json:"NetworkConfiguration"`
	PluginsS3ObjectVersion       *string                                              `json:"PluginsS3ObjectVersion,omitempty"`
	PluginsS3Path                *string                                              `json:"PluginsS3Path,omitempty"`
	RequirementsS3ObjectVersion  *string                                              `json:"RequirementsS3ObjectVersion,omitempty"`
	RequirementsS3Path           *string                                              `json:"RequirementsS3Path,omitempty"`
	Schedulers                   *int64                                               `json:"Schedulers,omitempty"`
	SourceBucketArn              string                                               `json:"SourceBucketArn"`
	Tags                         map[string]string                                    `json:"Tags,omitempty"`
	WebserverAccessMode          *CreateEnvironmentRequestBodyWebserverAccessModeEnum `json:"WebserverAccessMode,omitempty"`
	WeeklyMaintenanceWindowStart *string                                              `json:"WeeklyMaintenanceWindowStart,omitempty"`
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
