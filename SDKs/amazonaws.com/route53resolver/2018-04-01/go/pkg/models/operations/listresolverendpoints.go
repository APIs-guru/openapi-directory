package operations

import (
"openapi/pkg/models/shared")

type ListResolverEndpointsQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListResolverEndpointsXAmzTargetEnum string

const (
    ListResolverEndpointsXAmzTargetEnumRoute53ResolverListResolverEndpoints ListResolverEndpointsXAmzTargetEnum = "Route53Resolver.ListResolverEndpoints"
)


type ListResolverEndpointsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListResolverEndpointsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListResolverEndpointsRequest struct {
    QueryParams ListResolverEndpointsQueryParams 
    Headers ListResolverEndpointsHeaders 
    Request shared.ListResolverEndpointsRequest `request:"mediaType=application/json"`
    
}

type ListResolverEndpointsResponse struct {
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidParameterException *interface{} 
    InvalidRequestException *interface{} 
    ListResolverEndpointsResponse *shared.ListResolverEndpointsResponse 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

