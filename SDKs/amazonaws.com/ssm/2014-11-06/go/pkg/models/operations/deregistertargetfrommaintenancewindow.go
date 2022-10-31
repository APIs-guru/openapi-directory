package operations

import (
"openapi/pkg/models/shared")


type DeregisterTargetFromMaintenanceWindowXAmzTargetEnum string

const (
    DeregisterTargetFromMaintenanceWindowXAmzTargetEnumAmazonSsmDeregisterTargetFromMaintenanceWindow DeregisterTargetFromMaintenanceWindowXAmzTargetEnum = "AmazonSSM.DeregisterTargetFromMaintenanceWindow"
)


type DeregisterTargetFromMaintenanceWindowHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeregisterTargetFromMaintenanceWindowXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeregisterTargetFromMaintenanceWindowRequest struct {
    Headers DeregisterTargetFromMaintenanceWindowHeaders 
    Request shared.DeregisterTargetFromMaintenanceWindowRequest `request:"mediaType=application/json"`
    
}

type DeregisterTargetFromMaintenanceWindowResponse struct {
    ContentType string 
    DeregisterTargetFromMaintenanceWindowResult *shared.DeregisterTargetFromMaintenanceWindowResult 
    DoesNotExistException *interface{} 
    InternalServerError *interface{} 
    StatusCode int64 
    TargetInUseException *interface{} 
    
}

