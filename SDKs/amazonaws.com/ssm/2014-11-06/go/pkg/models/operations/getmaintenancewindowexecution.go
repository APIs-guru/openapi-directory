package operations

import (
"openapi/pkg/models/shared")


type GetMaintenanceWindowExecutionXAmzTargetEnum string

const (
    GetMaintenanceWindowExecutionXAmzTargetEnumAmazonSsmGetMaintenanceWindowExecution GetMaintenanceWindowExecutionXAmzTargetEnum = "AmazonSSM.GetMaintenanceWindowExecution"
)


type GetMaintenanceWindowExecutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetMaintenanceWindowExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetMaintenanceWindowExecutionRequest struct {
    Headers GetMaintenanceWindowExecutionHeaders 
    Request shared.GetMaintenanceWindowExecutionRequest `request:"mediaType=application/json"`
    
}

type GetMaintenanceWindowExecutionResponse struct {
    ContentType string 
    DoesNotExistException *interface{} 
    GetMaintenanceWindowExecutionResult *shared.GetMaintenanceWindowExecutionResult 
    InternalServerError *interface{} 
    StatusCode int64 
    
}

