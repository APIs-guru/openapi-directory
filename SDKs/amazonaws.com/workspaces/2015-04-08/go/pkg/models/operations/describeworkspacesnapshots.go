package operations

import (
"openapi/pkg/models/shared")


type DescribeWorkspaceSnapshotsXAmzTargetEnum string

const (
    DescribeWorkspaceSnapshotsXAmzTargetEnumWorkspacesServiceDescribeWorkspaceSnapshots DescribeWorkspaceSnapshotsXAmzTargetEnum = "WorkspacesService.DescribeWorkspaceSnapshots"
)


type DescribeWorkspaceSnapshotsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DescribeWorkspaceSnapshotsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DescribeWorkspaceSnapshotsRequest struct {
    Headers DescribeWorkspaceSnapshotsHeaders 
    Request shared.DescribeWorkspaceSnapshotsRequest `request:"mediaType=application/json"`
    
}

type DescribeWorkspaceSnapshotsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DescribeWorkspaceSnapshotsResult *shared.DescribeWorkspaceSnapshotsResult 
    InvalidParameterValuesException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

