package operations

import (
"openapi/pkg/models/shared")


type GetResolverRulePolicyXAmzTargetEnum string

const (
    GetResolverRulePolicyXAmzTargetEnumRoute53ResolverGetResolverRulePolicy GetResolverRulePolicyXAmzTargetEnum = "Route53Resolver.GetResolverRulePolicy"
)


type GetResolverRulePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetResolverRulePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetResolverRulePolicyRequest struct {
    Headers GetResolverRulePolicyHeaders 
    Request shared.GetResolverRulePolicyRequest `request:"mediaType=application/json"`
    
}

type GetResolverRulePolicyResponse struct {
    ContentType string 
    GetResolverRulePolicyResponse *shared.GetResolverRulePolicyResponse 
    InternalServiceErrorException *interface{} 
    InvalidParameterException *interface{} 
    StatusCode int64 
    UnknownResourceException *interface{} 
    
}

