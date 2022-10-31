package operations

import (
"openapi/pkg/models/shared")


type GetFirewallRuleGroupPolicyXAmzTargetEnum string

const (
    GetFirewallRuleGroupPolicyXAmzTargetEnumRoute53ResolverGetFirewallRuleGroupPolicy GetFirewallRuleGroupPolicyXAmzTargetEnum = "Route53Resolver.GetFirewallRuleGroupPolicy"
)


type GetFirewallRuleGroupPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetFirewallRuleGroupPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetFirewallRuleGroupPolicyRequest struct {
    Headers GetFirewallRuleGroupPolicyHeaders 
    Request shared.GetFirewallRuleGroupPolicyRequest `request:"mediaType=application/json"`
    
}

type GetFirewallRuleGroupPolicyResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetFirewallRuleGroupPolicyResponse *shared.GetFirewallRuleGroupPolicyResponse 
    InternalServiceErrorException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

