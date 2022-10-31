package operations

import (
"openapi/pkg/models/shared")

type ListFirewallDomainsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListFirewallDomainsXAmzTargetEnum string

const (
    ListFirewallDomainsXAmzTargetEnumRoute53ResolverListFirewallDomains ListFirewallDomainsXAmzTargetEnum = "Route53Resolver.ListFirewallDomains"
)


type ListFirewallDomainsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListFirewallDomainsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListFirewallDomainsRequest struct {
    QueryParams ListFirewallDomainsQueryParams 
    Headers ListFirewallDomainsHeaders 
    Request shared.ListFirewallDomainsRequest `request:"mediaType=application/json"`
    
}

type ListFirewallDomainsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServiceErrorException *interface{} 
    ListFirewallDomainsResponse *shared.ListFirewallDomainsResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

