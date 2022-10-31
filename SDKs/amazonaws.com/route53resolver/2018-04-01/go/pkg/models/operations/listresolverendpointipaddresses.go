package operations

import (
"openapi/pkg/models/shared")

type ListResolverEndpointIPAddressesQueryParams struct {
    MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    
}


type ListResolverEndpointIPAddressesXAmzTargetEnum string

const (
    ListResolverEndpointIPAddressesXAmzTargetEnumRoute53ResolverListResolverEndpointIPAddresses ListResolverEndpointIPAddressesXAmzTargetEnum = "Route53Resolver.ListResolverEndpointIpAddresses"
)


type ListResolverEndpointIPAddressesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget ListResolverEndpointIPAddressesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type ListResolverEndpointIPAddressesRequest struct {
    QueryParams ListResolverEndpointIPAddressesQueryParams 
    Headers ListResolverEndpointIPAddressesHeaders 
    Request shared.ListResolverEndpointIPAddressesRequest `request:"mediaType=application/json"`
    
}

type ListResolverEndpointIPAddressesResponse struct {
    ContentType string 
    InternalServiceErrorException *interface{} 
    InvalidNextTokenException *interface{} 
    InvalidParameterException *interface{} 
    ListResolverEndpointIPAddressesResponse *shared.ListResolverEndpointIPAddressesResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

