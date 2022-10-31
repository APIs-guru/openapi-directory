package operations

import (
"openapi/pkg/models/shared")


type RevokeIPRulesXAmzTargetEnum string

const (
    RevokeIPRulesXAmzTargetEnumWorkspacesServiceRevokeIPRules RevokeIPRulesXAmzTargetEnum = "WorkspacesService.RevokeIpRules"
)


type RevokeIPRulesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget RevokeIPRulesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type RevokeIPRulesRequest struct {
    Headers RevokeIPRulesHeaders 
    Request shared.RevokeIPRulesRequest `request:"mediaType=application/json"`
    
}

type RevokeIPRulesResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InvalidParameterValuesException *interface{} 
    InvalidResourceStateException *interface{} 
    ResourceNotFoundException *interface{} 
    RevokeIPRulesResult map[string]interface{} 
    StatusCode int64 
    
}

