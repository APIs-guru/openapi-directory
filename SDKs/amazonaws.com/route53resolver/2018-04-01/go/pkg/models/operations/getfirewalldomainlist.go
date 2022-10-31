package operations

import (
"openapi/pkg/models/shared")


type GetFirewallDomainListXAmzTargetEnum string

const (
    GetFirewallDomainListXAmzTargetEnumRoute53ResolverGetFirewallDomainList GetFirewallDomainListXAmzTargetEnum = "Route53Resolver.GetFirewallDomainList"
)


type GetFirewallDomainListHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetFirewallDomainListXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetFirewallDomainListRequest struct {
    Headers GetFirewallDomainListHeaders 
    Request shared.GetFirewallDomainListRequest `request:"mediaType=application/json"`
    
}

type GetFirewallDomainListResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetFirewallDomainListResponse *shared.GetFirewallDomainListResponse 
    InternalServiceErrorException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

