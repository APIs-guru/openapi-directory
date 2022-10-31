package operations

import (
"openapi/pkg/models/shared")


type GetMaintenanceWindowExecutionTaskXAmzTargetEnum string

const (
    GetMaintenanceWindowExecutionTaskXAmzTargetEnumAmazonSsmGetMaintenanceWindowExecutionTask GetMaintenanceWindowExecutionTaskXAmzTargetEnum = "AmazonSSM.GetMaintenanceWindowExecutionTask"
)


type GetMaintenanceWindowExecutionTaskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetMaintenanceWindowExecutionTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetMaintenanceWindowExecutionTaskRequest struct {
    Headers GetMaintenanceWindowExecutionTaskHeaders 
    Request shared.GetMaintenanceWindowExecutionTaskRequest `request:"mediaType=application/json"`
    
}

type GetMaintenanceWindowExecutionTaskResponse struct {
    ContentType string 
    DoesNotExistException *interface{} 
    GetMaintenanceWindowExecutionTaskResult *shared.GetMaintenanceWindowExecutionTaskResult 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

