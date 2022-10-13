package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResolverEndpointXAmzTargetEnum string

const (
	DeleteResolverEndpointXAmzTargetEnumRoute53ResolverDeleteResolverEndpoint DeleteResolverEndpointXAmzTargetEnum = "Route53Resolver.DeleteResolverEndpoint"
)

type DeleteResolverEndpointHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteResolverEndpointXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteResolverEndpointRequest struct {
	Headers DeleteResolverEndpointHeaders
	Request shared.DeleteResolverEndpointRequest `request:"mediaType=application/json"`
}

type DeleteResolverEndpointResponse struct {
	ContentType                    string
	DeleteResolverEndpointResponse *shared.DeleteResolverEndpointResponse
	InternalServiceErrorException  *interface{}
	InvalidParameterException      *interface{}
	InvalidRequestException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
