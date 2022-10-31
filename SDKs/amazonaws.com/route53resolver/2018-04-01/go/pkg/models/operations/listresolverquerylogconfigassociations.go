package operations

import (
"openapi/pkg/models/shared")

type ListResolverQueryLogConfigAssociationsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListResolverQueryLogConfigAssociationsXAmzTargetEnum string

const (
    ListResolverQueryLogConfigAssociationsXAmzTargetEnumRoute53ResolverListResolverQueryLogConfigAssociations ListResolverQueryLogConfigAssociationsXAmzTargetEnum = "Route53Resolver.ListResolverQueryLogConfigAssociations"
)


type ListResolverQueryLogConfigAssociationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListResolverQueryLogConfigAssociationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListResolverQueryLogConfigAssociationsRequest struct {
    QueryParams ListResolverQueryLogConfigAssociationsQueryParams 
    Headers ListResolverQueryLogConfigAssociationsHeaders 
    Request shared.ListResolverQueryLogConfigAssociationsRequest `request:"mediaType=application/json"`
    
}

type ListResolverQueryLogConfigAssociationsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidParameterException *interface{} 
    InvalidRequestException *interface{} 
    LimitExceededException *interface{} 
    ListResolverQueryLogConfigAssociationsResponse *shared.ListResolverQueryLogConfigAssociationsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

