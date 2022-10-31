package operations

import (
"openapi/pkg/models/shared")


type CreateFirewallDomainListXAmzTargetEnum string

const (
    CreateFirewallDomainListXAmzTargetEnumRoute53ResolverCreateFirewallDomainList CreateFirewallDomainListXAmzTargetEnum = "Route53Resolver.CreateFirewallDomainList"
)


type CreateFirewallDomainListHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CreateFirewallDomainListXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CreateFirewallDomainListRequest struct {
    Headers CreateFirewallDomainListHeaders 
    Request shared.CreateFirewallDomainListRequest `request:"mediaType=application/json"`
    
}

type CreateFirewallDomainListResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    CreateFirewallDomainListResponse *shared.CreateFirewallDomainListResponse 
    InternalServiceErrorException *interface{} 
    LimitExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

