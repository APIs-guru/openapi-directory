package operations

import (
"openapi/pkg/models/shared")


type DeregisterInstanceXAmzTargetEnum string

const (
    DeregisterInstanceXAmzTargetEnumOpsWorks20130218DeregisterInstance DeregisterInstanceXAmzTargetEnum = "OpsWorks_20130218.DeregisterInstance"
)


type DeregisterInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeregisterInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeregisterInstanceRequest struct {
    Headers DeregisterInstanceHeaders 
    Request shared.DeregisterInstanceRequest `request:"mediaType=application/json"`
    
}

type DeregisterInstanceResponse struct {
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

