package operations

import (
"openapi/pkg/models/shared")


type MigrateWorkspaceXAmzTargetEnum string

const (
    MigrateWorkspaceXAmzTargetEnumWorkspacesServiceMigrateWorkspace MigrateWorkspaceXAmzTargetEnum = "WorkspacesService.MigrateWorkspace"
)


type MigrateWorkspaceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget MigrateWorkspaceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type MigrateWorkspaceRequest struct {
    Headers MigrateWorkspaceHeaders 
    Request shared.MigrateWorkspaceRequest `request:"mediaType=application/json"`
    
}

type MigrateWorkspaceResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InvalidParameterValuesException *interface{} 
    MigrateWorkspaceResult *shared.MigrateWorkspaceResult 
    OperationInProgressException *interface{} 
    OperationNotSupportedException *interface{} 
    ResourceNotFoundException *interface{} 
    ResourceUnavailableException *interface{} 
    StatusCode int64 
    
}

