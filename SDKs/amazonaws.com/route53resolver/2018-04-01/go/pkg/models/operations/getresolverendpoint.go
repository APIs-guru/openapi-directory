package operations

import (
"openapi/pkg/models/shared")


type GetResolverEndpointXAmzTargetEnum string

const (
    GetResolverEndpointXAmzTargetEnumRoute53ResolverGetResolverEndpoint GetResolverEndpointXAmzTargetEnum = "Route53Resolver.GetResolverEndpoint"
)


type GetResolverEndpointHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetResolverEndpointXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetResolverEndpointRequest struct {
    Headers GetResolverEndpointHeaders 
    Request shared.GetResolverEndpointRequest `request:"mediaType=application/json"`
    
}

type GetResolverEndpointResponse struct {
    ContentType string 
    GetResolverEndpointResponse *shared.GetResolverEndpointResponse 
    InternalServiceErrorException *interface{} 
    InvalidParameterException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

