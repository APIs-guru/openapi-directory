package operations

import (
"openapi/pkg/models/shared")


type StartInstanceXAmzTargetEnum string

const (
    StartInstanceXAmzTargetEnumOpsWorks20130218StartInstance StartInstanceXAmzTargetEnum = "OpsWorks_20130218.StartInstance"
)


type StartInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartInstanceRequest struct {
    Headers StartInstanceHeaders 
    Request shared.StartInstanceRequest `request:"mediaType=application/json"`
    
}

type StartInstanceResponse struct {
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

