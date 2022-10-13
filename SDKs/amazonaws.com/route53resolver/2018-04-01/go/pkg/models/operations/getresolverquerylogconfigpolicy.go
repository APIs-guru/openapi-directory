package operations

import (
	"openapi/pkg/models/shared"
)

type GetResolverQueryLogConfigPolicyXAmzTargetEnum string

const (
	GetResolverQueryLogConfigPolicyXAmzTargetEnumRoute53ResolverGetResolverQueryLogConfigPolicy GetResolverQueryLogConfigPolicyXAmzTargetEnum = "Route53Resolver.GetResolverQueryLogConfigPolicy"
)

type GetResolverQueryLogConfigPolicyHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetResolverQueryLogConfigPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetResolverQueryLogConfigPolicyRequest struct {
	Headers GetResolverQueryLogConfigPolicyHeaders
	Request shared.GetResolverQueryLogConfigPolicyRequest `request:"mediaType=application/json"`
}

type GetResolverQueryLogConfigPolicyResponse struct {
	AccessDeniedException                   *interface{}
	ContentType                             string
	GetResolverQueryLogConfigPolicyResponse *shared.GetResolverQueryLogConfigPolicyResponse
	InternalServiceErrorException           *interface{}
	InvalidParameterException               *interface{}
	InvalidRequestException                 *interface{}
	StatusCode                              int64
	UnknownResourceException                *interface{}
}
