package operations

import (
"openapi/pkg/models/shared")


type DeregisterDevicesXAmzTargetEnum string

const (
    DeregisterDevicesXAmzTargetEnumSageMakerDeregisterDevices DeregisterDevicesXAmzTargetEnum = "SageMaker.DeregisterDevices"
)


type DeregisterDevicesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeregisterDevicesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeregisterDevicesRequest struct {
    Headers DeregisterDevicesHeaders 
    Request shared.DeregisterDevicesRequest `request:"mediaType=application/json"`
    
}

type DeregisterDevicesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

