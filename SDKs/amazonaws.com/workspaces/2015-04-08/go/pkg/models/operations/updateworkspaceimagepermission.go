package operations

import (
"openapi/pkg/models/shared")


type UpdateWorkspaceImagePermissionXAmzTargetEnum string

const (
    UpdateWorkspaceImagePermissionXAmzTargetEnumWorkspacesServiceUpdateWorkspaceImagePermission UpdateWorkspaceImagePermissionXAmzTargetEnum = "WorkspacesService.UpdateWorkspaceImagePermission"
)


type UpdateWorkspaceImagePermissionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateWorkspaceImagePermissionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateWorkspaceImagePermissionRequest struct {
    Headers UpdateWorkspaceImagePermissionHeaders 
    Request shared.UpdateWorkspaceImagePermissionRequest `request:"mediaType=application/json"`
    
}

type UpdateWorkspaceImagePermissionResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InvalidParameterValuesException *interface{} 
    OperationNotSupportedException *interface{} 
    ResourceNotFoundException *interface{} 
    ResourceUnavailableException *interface{} 
    StatusCode int64 
    UpdateWorkspaceImagePermissionResult map[string]interface{} 
    
}

