package operations

import (
"openapi/pkg/models/shared")


type CreateDeviceFleetXAmzTargetEnum string

const (
    CreateDeviceFleetXAmzTargetEnumSageMakerCreateDeviceFleet CreateDeviceFleetXAmzTargetEnum = "SageMaker.CreateDeviceFleet"
)


type CreateDeviceFleetHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateDeviceFleetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateDeviceFleetRequest struct {
    Headers CreateDeviceFleetHeaders 
    Request shared.CreateDeviceFleetRequest `request:"mediaType=application/json"`
    
}

type CreateDeviceFleetResponse struct {
    ContentType string 
    ResourceInUse *interface{} 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

