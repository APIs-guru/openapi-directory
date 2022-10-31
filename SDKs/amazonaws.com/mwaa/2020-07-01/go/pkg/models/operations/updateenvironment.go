package operations

import (
"openapi/pkg/models/shared")

type UpdateEnvironmentPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=Name"`
    
}

type UpdateEnvironmentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpdateEnvironmentRequestBodyLoggingConfiguration struct {
    DagProcessingLogs *shared.ModuleLoggingConfigurationInput `json:"DagProcessingLogs,omitempty"`
    SchedulerLogs *shared.ModuleLoggingConfigurationInput `json:"SchedulerLogs,omitempty"`
    TaskLogs *shared.ModuleLoggingConfigurationInput `json:"TaskLogs,omitempty"`
    WebserverLogs *shared.ModuleLoggingConfigurationInput `json:"WebserverLogs,omitempty"`
    WorkerLogs *shared.ModuleLoggingConfigurationInput `json:"WorkerLogs,omitempty"`
    
}

type UpdateEnvironmentRequestBodyNetworkConfiguration struct {
    SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
    
}


type UpdateEnvironmentRequestBodyWebserverAccessModeEnum string

const (
    UpdateEnvironmentRequestBodyWebserverAccessModeEnumPrivateOnly UpdateEnvironmentRequestBodyWebserverAccessModeEnum = "PRIVATE_ONLY"
UpdateEnvironmentRequestBodyWebserverAccessModeEnumPublicOnly UpdateEnvironmentRequestBodyWebserverAccessModeEnum = "PUBLIC_ONLY"
)


type UpdateEnvironmentRequestBody struct {
    AirflowConfigurationOptions map[string]string `json:"AirflowConfigurationOptions,omitempty"`
    AirflowVersion *string `json:"AirflowVersion,omitempty"`
    DagS3Path *string `json:"DagS3Path,omitempty"`
    EnvironmentClass *string `json:"EnvironmentClass,omitempty"`
    ExecutionRoleArn *string `json:"ExecutionRoleArn,omitempty"`
    LoggingConfiguration *UpdateEnvironmentRequestBodyLoggingConfiguration `json:"LoggingConfiguration,omitempty"`
    MaxWorkers *int64 `json:"MaxWorkers,omitempty"`
    MinWorkers *int64 `json:"MinWorkers,omitempty"`
    NetworkConfiguration *UpdateEnvironmentRequestBodyNetworkConfiguration `json:"NetworkConfiguration,omitempty"`
    PluginsS3ObjectVersion *string `json:"PluginsS3ObjectVersion,omitempty"`
    PluginsS3Path *string `json:"PluginsS3Path,omitempty"`
    RequirementsS3ObjectVersion *string `json:"RequirementsS3ObjectVersion,omitempty"`
    RequirementsS3Path *string `json:"RequirementsS3Path,omitempty"`
    Schedulers *int64 `json:"Schedulers,omitempty"`
    SourceBucketArn *string `json:"SourceBucketArn,omitempty"`
    WebserverAccessMode *UpdateEnvironmentRequestBodyWebserverAccessModeEnum `json:"WebserverAccessMode,omitempty"`
    WeeklyMaintenanceWindowStart *string `json:"WeeklyMaintenanceWindowStart,omitempty"`
    
}

type UpdateEnvironmentRequest struct {
    PathParams UpdateEnvironmentPathParams 
    Headers UpdateEnvironmentHeaders 
    Request UpdateEnvironmentRequestBody `request:"mediaType=application/json"`
    
}

type UpdateEnvironmentResponse struct {
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateEnvironmentOutput *shared.UpdateEnvironmentOutput 
    ValidationException *interface{} 
    
}

