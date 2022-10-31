package operations

import (
"openapi/pkg/models/shared")


type StopWorkspacesXAmzTargetEnum string

const (
    StopWorkspacesXAmzTargetEnumWorkspacesServiceStopWorkspaces StopWorkspacesXAmzTargetEnum = "WorkspacesService.StopWorkspaces"
)


type StopWorkspacesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget StopWorkspacesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type StopWorkspacesRequest struct {
    Headers StopWorkspacesHeaders 
    Request shared.StopWorkspacesRequest `request:"mediaType=application/json"`
    
}

type StopWorkspacesResponse struct {
    ContentType string 
    StatusCode int64 
    StopWorkspacesResult *shared.StopWorkspacesResult 
    
}

