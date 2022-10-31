package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateResolverEndpointXAmzTargetEnum string

const (
	UpdateResolverEndpointXAmzTargetEnumRoute53ResolverUpdateResolverEndpoint UpdateResolverEndpointXAmzTargetEnum = "Route53Resolver.UpdateResolverEndpoint"
)

type UpdateResolverEndpointHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateResolverEndpointXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
