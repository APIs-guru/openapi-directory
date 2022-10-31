package operations

import (
"openapi/pkg/models/shared")


type DeleteDeviceFleetXAmzTargetEnum string

const (
    DeleteDeviceFleetXAmzTargetEnumSageMakerDeleteDeviceFleet DeleteDeviceFleetXAmzTargetEnum = "SageMaker.DeleteDeviceFleet"
)


type DeleteDeviceFleetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteDeviceFleetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteDeviceFleetRequest struct {
    Headers DeleteDeviceFleetHeaders 
    Request shared.DeleteDeviceFleetRequest `request:"mediaType=application/json"`
    
}

type DeleteDeviceFleetResponse struct {
    ContentType string 
    ResourceInUse *interface{} 
    StatusCode int64 
    
}

