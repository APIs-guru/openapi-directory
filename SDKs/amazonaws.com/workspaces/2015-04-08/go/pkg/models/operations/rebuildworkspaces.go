package operations

import (
"openapi/pkg/models/shared")


type RebuildWorkspacesXAmzTargetEnum string

const (
    RebuildWorkspacesXAmzTargetEnumWorkspacesServiceRebuildWorkspaces RebuildWorkspacesXAmzTargetEnum = "WorkspacesService.RebuildWorkspaces"
)


type RebuildWorkspacesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RebuildWorkspacesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RebuildWorkspacesRequest struct {
    Headers RebuildWorkspacesHeaders 
    Request shared.RebuildWorkspacesRequest `request:"mediaType=application/json"`
    
}

type RebuildWorkspacesResponse struct {
    ContentType string 
    RebuildWorkspacesResult *shared.RebuildWorkspacesResult 
    StatusCode int64 
    
}

