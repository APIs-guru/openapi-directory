package operations

import (
"openapi/pkg/models/shared")


type UpdateInstanceXAmzTargetEnum string

const (
    UpdateInstanceXAmzTargetEnumOpsWorks20130218UpdateInstance UpdateInstanceXAmzTargetEnum = "OpsWorks_20130218.UpdateInstance"
)


type UpdateInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateInstanceRequest struct {
    Headers UpdateInstanceHeaders 
    Request shared.UpdateInstanceRequest `request:"mediaType=application/json"`
    
}

type UpdateInstanceResponse struct {
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

