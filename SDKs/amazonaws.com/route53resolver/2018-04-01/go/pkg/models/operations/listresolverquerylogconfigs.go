package operations

import (
"openapi/pkg/models/shared")

type ListResolverQueryLogConfigsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListResolverQueryLogConfigsXAmzTargetEnum string

const (
    ListResolverQueryLogConfigsXAmzTargetEnumRoute53ResolverListResolverQueryLogConfigs ListResolverQueryLogConfigsXAmzTargetEnum = "Route53Resolver.ListResolverQueryLogConfigs"
)


type ListResolverQueryLogConfigsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListResolverQueryLogConfigsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListResolverQueryLogConfigsRequest struct {
    QueryParams ListResolverQueryLogConfigsQueryParams 
    Headers ListResolverQueryLogConfigsHeaders 
    Request shared.ListResolverQueryLogConfigsRequest `request:"mediaType=application/json"`
    
}

type ListResolverQueryLogConfigsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidParameterException *interface{} 
    InvalidRequestException *interface{} 
    ListResolverQueryLogConfigsResponse *shared.ListResolverQueryLogConfigsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

