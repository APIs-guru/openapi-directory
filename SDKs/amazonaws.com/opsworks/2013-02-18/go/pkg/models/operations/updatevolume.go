package operations

import (
"openapi/pkg/models/shared")


type UpdateVolumeXAmzTargetEnum string

const (
    UpdateVolumeXAmzTargetEnumOpsWorks20130218UpdateVolume UpdateVolumeXAmzTargetEnum = "OpsWorks_20130218.UpdateVolume"
)


type UpdateVolumeHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateVolumeXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateVolumeRequest struct {
    Headers UpdateVolumeHeaders 
    Request shared.UpdateVolumeRequest `request:"mediaType=application/json"`
    
}

type UpdateVolumeResponse struct {
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

