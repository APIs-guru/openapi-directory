package operations

import (
"openapi/pkg/models/shared")

type ListResolverRulesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListResolverRulesXAmzTargetEnum string

const (
    ListResolverRulesXAmzTargetEnumRoute53ResolverListResolverRules ListResolverRulesXAmzTargetEnum = "Route53Resolver.ListResolverRules"
)


type ListResolverRulesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListResolverRulesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListResolverRulesRequest struct {
    QueryParams ListResolverRulesQueryParams 
    Headers ListResolverRulesHeaders 
    Request shared.ListResolverRulesRequest `request:"mediaType=application/json"`
    
}

type ListResolverRulesResponse struct {
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidParameterException *interface{} 
    InvalidRequestException *interface{} 
    ListResolverRulesResponse *shared.ListResolverRulesResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

