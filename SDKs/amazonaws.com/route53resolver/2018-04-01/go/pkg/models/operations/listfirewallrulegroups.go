package operations

import (
"openapi/pkg/models/shared")

type ListFirewallRuleGroupsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListFirewallRuleGroupsXAmzTargetEnum string

const (
    ListFirewallRuleGroupsXAmzTargetEnumRoute53ResolverListFirewallRuleGroups ListFirewallRuleGroupsXAmzTargetEnum = "Route53Resolver.ListFirewallRuleGroups"
)


type ListFirewallRuleGroupsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListFirewallRuleGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListFirewallRuleGroupsRequest struct {
    QueryParams ListFirewallRuleGroupsQueryParams 
    Headers ListFirewallRuleGroupsHeaders 
    Request shared.ListFirewallRuleGroupsRequest `request:"mediaType=application/json"`
    
}

type ListFirewallRuleGroupsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServiceErrorException *interface{} 
    ListFirewallRuleGroupsResponse *shared.ListFirewallRuleGroupsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

