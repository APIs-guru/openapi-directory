package operations

import (
"openapi/pkg/models/shared")


type DisassociateResolverRuleXAmzTargetEnum string

const (
    DisassociateResolverRuleXAmzTargetEnumRoute53ResolverDisassociateResolverRule DisassociateResolverRuleXAmzTargetEnum = "Route53Resolver.DisassociateResolverRule"
)


type DisassociateResolverRuleHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisassociateResolverRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisassociateResolverRuleRequest struct {
    Headers DisassociateResolverRuleHeaders 
    Request shared.DisassociateResolverRuleRequest `request:"mediaType=application/json"`
    
}

type DisassociateResolverRuleResponse struct {
    ContentType string 
    DisassociateResolverRuleResponse *shared.DisassociateResolverRuleResponse 
    InternalServiceErrorException *interface{} 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

