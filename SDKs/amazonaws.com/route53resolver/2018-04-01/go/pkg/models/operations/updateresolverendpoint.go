package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateResolverEndpointXAmzTargetEnum string

const (
	UpdateResolverEndpointXAmzTargetEnumRoute53ResolverUpdateResolverEndpoint UpdateResolverEndpointXAmzTargetEnum = "Route53Resolver.UpdateResolverEndpoint"
)

type UpdateResolverEndpointHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateResolverEndpointXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateResolverEndpointRequest struct {
	Headers UpdateResolverEndpointHeaders
	Request shared.UpdateResolverEndpointRequest `request:"mediaType=application/json"`
}

type UpdateResolverEndpointResponse struct {
	ContentType                    string
	InternalServiceErrorException  *interface{}
	InvalidParameterException      *interface{}
	InvalidRequestException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UpdateResolverEndpointResponse *shared.UpdateResolverEndpointResponse
}
