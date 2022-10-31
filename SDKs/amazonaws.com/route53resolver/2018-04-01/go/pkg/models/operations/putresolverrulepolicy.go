package operations

import (
"openapi/pkg/models/shared")


type PutResolverRulePolicyXAmzTargetEnum string

const (
    PutResolverRulePolicyXAmzTargetEnumRoute53ResolverPutResolverRulePolicy PutResolverRulePolicyXAmzTargetEnum = "Route53Resolver.PutResolverRulePolicy"
)


type PutResolverRulePolicyHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget PutResolverRulePolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type PutResolverRulePolicyRequest struct {
    Headers PutResolverRulePolicyHeaders 
    Request shared.PutResolverRulePolicyRequest `request:"mediaType=application/json"`
    
}

type PutResolverRulePolicyResponse struct {
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidParameterException *interface{} 
    InvalidPolicyDocument *interface{} 
    PutResolverRulePolicyResponse *shared.PutResolverRulePolicyResponse 
    StatusCode int64 
    UnknownResourceException *interface{} 
    
}

