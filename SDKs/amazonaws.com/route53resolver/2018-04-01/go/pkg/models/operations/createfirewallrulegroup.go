package operations

import (
"openapi/pkg/models/shared")


type CreateFirewallRuleGroupXAmzTargetEnum string

const (
    CreateFirewallRuleGroupXAmzTargetEnumRoute53ResolverCreateFirewallRuleGroup CreateFirewallRuleGroupXAmzTargetEnum = "Route53Resolver.CreateFirewallRuleGroup"
)


type CreateFirewallRuleGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateFirewallRuleGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateFirewallRuleGroupRequest struct {
    Headers CreateFirewallRuleGroupHeaders 
    Request shared.CreateFirewallRuleGroupRequest `request:"mediaType=application/json"`
    
}

type CreateFirewallRuleGroupResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateFirewallRuleGroupResponse *shared.CreateFirewallRuleGroupResponse 
    InternalServiceErrorException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

