package operations

import (
"openapi/pkg/models/shared")


type UpdateRuleGroupXAmzTargetEnum string

const (
    UpdateRuleGroupXAmzTargetEnumNetworkFirewall20201112UpdateRuleGroup UpdateRuleGroupXAmzTargetEnum = "NetworkFirewall_20201112.UpdateRuleGroup"
)


type UpdateRuleGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateRuleGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateRuleGroupRequest struct {
    Headers UpdateRuleGroupHeaders 
    Request shared.UpdateRuleGroupRequest `request:"mediaType=application/json"`
    
}

type UpdateRuleGroupResponse struct {
    ContentType string 
    InternalServerError *interface{} 
    InvalidRequestException *interface{} 
    InvalidTokenException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateRuleGroupResponse *shared.UpdateRuleGroupResponse 
    
}

