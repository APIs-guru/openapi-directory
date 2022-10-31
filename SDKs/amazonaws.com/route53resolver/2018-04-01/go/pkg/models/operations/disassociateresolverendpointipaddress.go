package operations

import (
"openapi/pkg/models/shared")


type DisassociateResolverEndpointIPAddressXAmzTargetEnum string

const (
    DisassociateResolverEndpointIPAddressXAmzTargetEnumRoute53ResolverDisassociateResolverEndpointIPAddress DisassociateResolverEndpointIPAddressXAmzTargetEnum = "Route53Resolver.DisassociateResolverEndpointIpAddress"
)


type DisassociateResolverEndpointIPAddressHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DisassociateResolverEndpointIPAddressXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DisassociateResolverEndpointIPAddressRequest struct {
    Headers DisassociateResolverEndpointIPAddressHeaders 
    Request shared.DisassociateResolverEndpointIPAddressRequest `request:"mediaType=application/json"`
    
}

type DisassociateResolverEndpointIPAddressResponse struct {
    ContentType string 
    DisassociateResolverEndpointIPAddressResponse *shared.DisassociateResolverEndpointIPAddressResponse 
    InternalServiceErrorException *interface{} 
    InvalidParameterException *interface{} 
    InvalidRequestException *interface{} 
    ResourceExistsException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

