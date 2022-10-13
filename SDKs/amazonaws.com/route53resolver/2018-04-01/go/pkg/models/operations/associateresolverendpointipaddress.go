package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateResolverEndpointIPAddressXAmzTargetEnum string

const (
	AssociateResolverEndpointIPAddressXAmzTargetEnumRoute53ResolverAssociateResolverEndpointIPAddress AssociateResolverEndpointIPAddressXAmzTargetEnum = "Route53Resolver.AssociateResolverEndpointIpAddress"
)

type AssociateResolverEndpointIPAddressHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateResolverEndpointIPAddressXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssociateResolverEndpointIPAddressRequest struct {
	Headers AssociateResolverEndpointIPAddressHeaders
	Request shared.AssociateResolverEndpointIPAddressRequest `request:"mediaType=application/json"`
}

type AssociateResolverEndpointIPAddressResponse struct {
	AssociateResolverEndpointIPAddressResponse *shared.AssociateResolverEndpointIPAddressResponse
	ContentType                                string
	InternalServiceErrorException              *interface{}
	InvalidParameterException                  *interface{}
	InvalidRequestException                    *interface{}
	LimitExceededException                     *interface{}
	ResourceExistsException                    *interface{}
	ResourceNotFoundException                  *interface{}
	StatusCode                                 int64
	ThrottlingException                        *interface{}
}
