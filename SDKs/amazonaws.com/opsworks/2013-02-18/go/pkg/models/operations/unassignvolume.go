package operations

import (
"openapi/pkg/models/shared")


type UnassignVolumeXAmzTargetEnum string

const (
    UnassignVolumeXAmzTargetEnumOpsWorks20130218UnassignVolume UnassignVolumeXAmzTargetEnum = "OpsWorks_20130218.UnassignVolume"
)


type UnassignVolumeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UnassignVolumeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UnassignVolumeRequest struct {
    Headers UnassignVolumeHeaders 
    Request shared.UnassignVolumeRequest `request:"mediaType=application/json"`
    
}

type UnassignVolumeResponse struct {
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

