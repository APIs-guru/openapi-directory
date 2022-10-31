package operations

import (
"openapi/pkg/models/shared")


type UpdateRulesOfIPGroupXAmzTargetEnum string

const (
    UpdateRulesOfIPGroupXAmzTargetEnumWorkspacesServiceUpdateRulesOfIPGroup UpdateRulesOfIPGroupXAmzTargetEnum = "WorkspacesService.UpdateRulesOfIpGroup"
)


type UpdateRulesOfIPGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateRulesOfIPGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateRulesOfIPGroupRequest struct {
    Headers UpdateRulesOfIPGroupHeaders 
    Request shared.UpdateRulesOfIPGroupRequest `request:"mediaType=application/json"`
    
}

type UpdateRulesOfIPGroupResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InvalidParameterValuesException *interface{} 
    InvalidResourceStateException *interface{} 
    ResourceLimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateRulesOfIPGroupResult map[string]interface{} 
    
}

