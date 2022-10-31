package operations

import (
"openapi/pkg/models/shared")


type StartWorkspacesXAmzTargetEnum string

const (
    StartWorkspacesXAmzTargetEnumWorkspacesServiceStartWorkspaces StartWorkspacesXAmzTargetEnum = "WorkspacesService.StartWorkspaces"
)


type StartWorkspacesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StartWorkspacesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StartWorkspacesRequest struct {
    Headers StartWorkspacesHeaders 
    Request shared.StartWorkspacesRequest `request:"mediaType=application/json"`
    
}

type StartWorkspacesResponse struct {
    ContentType string 
    StartWorkspacesResult *shared.StartWorkspacesResult 
    StatusCode int64 
    
}

