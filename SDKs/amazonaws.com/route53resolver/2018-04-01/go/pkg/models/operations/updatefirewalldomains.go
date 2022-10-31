package operations

import (
"openapi/pkg/models/shared")


type UpdateFirewallDomainsXAmzTargetEnum string

const (
    UpdateFirewallDomainsXAmzTargetEnumRoute53ResolverUpdateFirewallDomains UpdateFirewallDomainsXAmzTargetEnum = "Route53Resolver.UpdateFirewallDomains"
)


type UpdateFirewallDomainsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget UpdateFirewallDomainsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type UpdateFirewallDomainsRequest struct {
    Headers UpdateFirewallDomainsHeaders 
    Request shared.UpdateFirewallDomainsRequest `request:"mediaType=application/json"`
    
}

type UpdateFirewallDomainsResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServiceErrorException *interface{} 
    LimitExceededException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateFirewallDomainsResponse *shared.UpdateFirewallDomainsResponse 
    ValidationException *interface{} 
    
}

