package operations

import (
"openapi/pkg/models/shared")

type ListFirewallDomainListsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListFirewallDomainListsXAmzTargetEnum string

const (
    ListFirewallDomainListsXAmzTargetEnumRoute53ResolverListFirewallDomainLists ListFirewallDomainListsXAmzTargetEnum = "Route53Resolver.ListFirewallDomainLists"
)


type ListFirewallDomainListsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListFirewallDomainListsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListFirewallDomainListsRequest struct {
    QueryParams ListFirewallDomainListsQueryParams 
    Headers ListFirewallDomainListsHeaders 
    Request shared.ListFirewallDomainListsRequest `request:"mediaType=application/json"`
    
}

type ListFirewallDomainListsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServiceErrorException *interface{} 
    ListFirewallDomainListsResponse *shared.ListFirewallDomainListsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

