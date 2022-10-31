package operations

import (
"openapi/pkg/models/shared")


type UpdateFirewallRuleGroupAssociationXAmzTargetEnum string

const (
    UpdateFirewallRuleGroupAssociationXAmzTargetEnumRoute53ResolverUpdateFirewallRuleGroupAssociation UpdateFirewallRuleGroupAssociationXAmzTargetEnum = "Route53Resolver.UpdateFirewallRuleGroupAssociation"
)


type UpdateFirewallRuleGroupAssociationHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateFirewallRuleGroupAssociationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateFirewallRuleGroupAssociationRequest struct {
    Headers UpdateFirewallRuleGroupAssociationHeaders 
    Request shared.UpdateFirewallRuleGroupAssociationRequest `request:"mediaType=application/json"`
    
}

type UpdateFirewallRuleGroupAssociationResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServiceErrorException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateFirewallRuleGroupAssociationResponse *shared.UpdateFirewallRuleGroupAssociationResponse 
    ValidationException *interface{} 
    
}

