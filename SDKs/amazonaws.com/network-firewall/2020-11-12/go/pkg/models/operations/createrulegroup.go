package operations

import (
"openapi/pkg/models/shared")


type CreateRuleGroupXAmzTargetEnum string

const (
    CreateRuleGroupXAmzTargetEnumNetworkFirewall20201112CreateRuleGroup CreateRuleGroupXAmzTargetEnum = "NetworkFirewall_20201112.CreateRuleGroup"
)


type CreateRuleGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateRuleGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateRuleGroupRequest struct {
    Headers CreateRuleGroupHeaders 
    Request shared.CreateRuleGroupRequest `request:"mediaType=application/json"`
    
}

type CreateRuleGroupResponse struct {
    ContentType string 
    CreateRuleGroupResponse *shared.CreateRuleGroupResponse 
    InsufficientCapacityException *interface{} 
    InternalServerError *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

