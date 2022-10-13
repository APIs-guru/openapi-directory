package operations

import (
	"openapi/pkg/models/shared"
)

type GetResolverEndpointXAmzTargetEnum string

const (
	GetResolverEndpointXAmzTargetEnumRoute53ResolverGetResolverEndpoint GetResolverEndpointXAmzTargetEnum = "Route53Resolver.GetResolverEndpoint"
)

type GetResolverEndpointHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetResolverEndpointXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetResolverEndpointRequest struct {
	Headers GetResolverEndpointHeaders
	Request shared.GetResolverEndpointRequest `request:"mediaType=application/json"`
}

type GetResolverEndpointResponse struct {
	ContentType                   string
	GetResolverEndpointResponse   *shared.GetResolverEndpointResponse
	InternalServiceErrorException *interface{}
	InvalidParameterException     *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
