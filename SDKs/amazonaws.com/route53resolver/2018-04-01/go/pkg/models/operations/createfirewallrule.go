package operations

import (
"openapi/pkg/models/shared")


type CreateFirewallRuleXAmzTargetEnum string

const (
    CreateFirewallRuleXAmzTargetEnumRoute53ResolverCreateFirewallRule CreateFirewallRuleXAmzTargetEnum = "Route53Resolver.CreateFirewallRule"
)


type CreateFirewallRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateFirewallRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateFirewallRuleRequest struct {
    Headers CreateFirewallRuleHeaders 
    Request shared.CreateFirewallRuleRequest `request:"mediaType=application/json"`
    
}

type CreateFirewallRuleResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateFirewallRuleResponse *shared.CreateFirewallRuleResponse 
    InternalServiceErrorException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

