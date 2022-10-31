package operations

import (
"openapi/pkg/models/shared")


type DeleteWorkspaceImageXAmzTargetEnum string

const (
    DeleteWorkspaceImageXAmzTargetEnumWorkspacesServiceDeleteWorkspaceImage DeleteWorkspaceImageXAmzTargetEnum = "WorkspacesService.DeleteWorkspaceImage"
)


type DeleteWorkspaceImageHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteWorkspaceImageXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteWorkspaceImageRequest struct {
    Headers DeleteWorkspaceImageHeaders 
    Request shared.DeleteWorkspaceImageRequest `request:"mediaType=application/json"`
    
}

type DeleteWorkspaceImageResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DeleteWorkspaceImageResult map[string]interface{} 
    InvalidResourceStateException *interface{} 
    ResourceAssociatedException *interface{} 
    StatusCode int64 
    
}

