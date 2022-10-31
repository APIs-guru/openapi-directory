package operations

import (
"openapi/pkg/models/shared")


type UpdateDeviceFleetXAmzTargetEnum string

const (
    UpdateDeviceFleetXAmzTargetEnumSageMakerUpdateDeviceFleet UpdateDeviceFleetXAmzTargetEnum = "SageMaker.UpdateDeviceFleet"
)


type UpdateDeviceFleetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateDeviceFleetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateDeviceFleetRequest struct {
    Headers UpdateDeviceFleetHeaders 
    Request shared.UpdateDeviceFleetRequest `request:"mediaType=application/json"`
    
}

type UpdateDeviceFleetResponse struct {
    ContentType string 
    ResourceInUse *interface{} 
    StatusCode int64 
    
}

