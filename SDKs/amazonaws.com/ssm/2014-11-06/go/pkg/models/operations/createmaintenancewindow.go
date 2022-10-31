package operations

import (
"openapi/pkg/models/shared")


type CreateMaintenanceWindowXAmzTargetEnum string

const (
    CreateMaintenanceWindowXAmzTargetEnumAmazonSsmCreateMaintenanceWindow CreateMaintenanceWindowXAmzTargetEnum = "AmazonSSM.CreateMaintenanceWindow"
)


type CreateMaintenanceWindowHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateMaintenanceWindowXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateMaintenanceWindowRequest struct {
    Headers CreateMaintenanceWindowHeaders 
    Request shared.CreateMaintenanceWindowRequest `request:"mediaType=application/json"`
    
}

type CreateMaintenanceWindowResponse struct {
    ContentType string 
    CreateMaintenanceWindowResult *shared.CreateMaintenanceWindowResult 
    IdempotentParameterMismatch *interface{} 
    InternalServerError *interface{} 
    ResourceLimitExceededException *interface{} 
    StatusCode int64 
    
}

