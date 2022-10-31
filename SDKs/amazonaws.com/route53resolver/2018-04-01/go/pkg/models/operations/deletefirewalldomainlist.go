package operations

import (
"openapi/pkg/models/shared")


type DeleteFirewallDomainListXAmzTargetEnum string

const (
    DeleteFirewallDomainListXAmzTargetEnumRoute53ResolverDeleteFirewallDomainList DeleteFirewallDomainListXAmzTargetEnum = "Route53Resolver.DeleteFirewallDomainList"
)


type DeleteFirewallDomainListHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteFirewallDomainListXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteFirewallDomainListRequest struct {
    Headers DeleteFirewallDomainListHeaders 
    Request shared.DeleteFirewallDomainListRequest `request:"mediaType=application/json"`
    
}

type DeleteFirewallDomainListResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    DeleteFirewallDomainListResponse *shared.DeleteFirewallDomainListResponse 
    InternalServiceErrorException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

