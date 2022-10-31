package operations

import (
"openapi/pkg/models/shared")


type RegisterDevicesXAmzTargetEnum string

const (
    RegisterDevicesXAmzTargetEnumSageMakerRegisterDevices RegisterDevicesXAmzTargetEnum = "SageMaker.RegisterDevices"
)


type RegisterDevicesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RegisterDevicesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RegisterDevicesRequest struct {
    Headers RegisterDevicesHeaders 
    Request shared.RegisterDevicesRequest `request:"mediaType=application/json"`
    
}

type RegisterDevicesResponse struct {
    ContentType string 
    ResourceLimitExceeded *interface{} 
    StatusCode int64 
    
}

