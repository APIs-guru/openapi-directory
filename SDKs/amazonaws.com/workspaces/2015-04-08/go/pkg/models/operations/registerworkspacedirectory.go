package operations

import (
"openapi/pkg/models/shared")


type RegisterWorkspaceDirectoryXAmzTargetEnum string

const (
    RegisterWorkspaceDirectoryXAmzTargetEnumWorkspacesServiceRegisterWorkspaceDirectory RegisterWorkspaceDirectoryXAmzTargetEnum = "WorkspacesService.RegisterWorkspaceDirectory"
)


type RegisterWorkspaceDirectoryHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RegisterWorkspaceDirectoryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RegisterWorkspaceDirectoryRequest struct {
    Headers RegisterWorkspaceDirectoryHeaders 
    Request shared.RegisterWorkspaceDirectoryRequest `request:"mediaType=application/json"`
    
}

type RegisterWorkspaceDirectoryResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InvalidParameterValuesException *interface{} 
    InvalidResourceStateException *interface{} 
    OperationNotSupportedException *interface{} 
    RegisterWorkspaceDirectoryResult map[string]interface{} 
    ResourceLimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UnsupportedNetworkConfigurationException *interface{} 
    WorkspacesDefaultRoleNotFoundException *interface{} 
    
}

