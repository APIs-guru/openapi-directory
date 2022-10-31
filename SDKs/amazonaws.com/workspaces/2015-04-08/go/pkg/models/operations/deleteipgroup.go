package operations

import (
"openapi/pkg/models/shared")


type DeleteIPGroupXAmzTargetEnum string

const (
    DeleteIPGroupXAmzTargetEnumWorkspacesServiceDeleteIPGroup DeleteIPGroupXAmzTargetEnum = "WorkspacesService.DeleteIpGroup"
)


type DeleteIPGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteIPGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteIPGroupRequest struct {
    Headers DeleteIPGroupHeaders 
    Request shared.DeleteIPGroupRequest `request:"mediaType=application/json"`
    
}

type DeleteIPGroupResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    DeleteIPGroupResult map[string]interface{} 
    InvalidParameterValuesException *interface{} 
    ResourceAssociatedException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    
}

