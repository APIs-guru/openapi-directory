package operations

import (
"openapi/pkg/models/shared")

type ListResolverRuleAssociationsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListResolverRuleAssociationsXAmzTargetEnum string

const (
    ListResolverRuleAssociationsXAmzTargetEnumRoute53ResolverListResolverRuleAssociations ListResolverRuleAssociationsXAmzTargetEnum = "Route53Resolver.ListResolverRuleAssociations"
)


type ListResolverRuleAssociationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListResolverRuleAssociationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListResolverRuleAssociationsRequest struct {
    QueryParams ListResolverRuleAssociationsQueryParams 
    Headers ListResolverRuleAssociationsHeaders 
    Request shared.ListResolverRuleAssociationsRequest `request:"mediaType=application/json"`
    
}

type ListResolverRuleAssociationsResponse struct {
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidParameterException *interface{} 
    InvalidRequestException *interface{} 
    ListResolverRuleAssociationsResponse *shared.ListResolverRuleAssociationsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

