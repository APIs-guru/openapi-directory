package operations

import (
"openapi/pkg/models/shared")


type PutFirewallRuleGroupPolicyXAmzTargetEnum string

const (
    PutFirewallRuleGroupPolicyXAmzTargetEnumRoute53ResolverPutFirewallRuleGroupPolicy PutFirewallRuleGroupPolicyXAmzTargetEnum = "Route53Resolver.PutFirewallRuleGroupPolicy"
)


type PutFirewallRuleGroupPolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutFirewallRuleGroupPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutFirewallRuleGroupPolicyRequest struct {
    Headers PutFirewallRuleGroupPolicyHeaders 
    Request shared.PutFirewallRuleGroupPolicyRequest `request:"mediaType=application/json"`
    
}

type PutFirewallRuleGroupPolicyResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServiceErrorException *interface{} 
    PutFirewallRuleGroupPolicyResponse *shared.PutFirewallRuleGroupPolicyResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

