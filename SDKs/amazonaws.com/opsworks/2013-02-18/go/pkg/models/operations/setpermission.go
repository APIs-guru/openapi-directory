package operations

import (
"openapi/pkg/models/shared")


type SetPermissionXAmzTargetEnum string

const (
    SetPermissionXAmzTargetEnumOpsWorks20130218SetPermission SetPermissionXAmzTargetEnum = "OpsWorks_20130218.SetPermission"
)


type SetPermissionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget SetPermissionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type SetPermissionRequest struct {
    Headers SetPermissionHeaders 
    Request shared.SetPermissionRequest `request:"mediaType=application/json"`
    
}

type SetPermissionResponse struct {
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

