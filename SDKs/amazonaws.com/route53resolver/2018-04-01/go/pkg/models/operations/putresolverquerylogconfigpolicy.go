package operations

import (
	"openapi/pkg/models/shared"
)

type PutResolverQueryLogConfigPolicyXAmzTargetEnum string

const (
	PutResolverQueryLogConfigPolicyXAmzTargetEnumRoute53ResolverPutResolverQueryLogConfigPolicy PutResolverQueryLogConfigPolicyXAmzTargetEnum = "Route53Resolver.PutResolverQueryLogConfigPolicy"
)

type PutResolverQueryLogConfigPolicyHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutResolverQueryLogConfigPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutResolverQueryLogConfigPolicyRequest struct {
	Headers PutResolverQueryLogConfigPolicyHeaders
	Request shared.PutResolverQueryLogConfigPolicyRequest `request:"mediaType=application/json"`
}

type PutResolverQueryLogConfigPolicyResponse struct {
	AccessDeniedException                   *interface{}
	ContentType                             string
	InternalServiceErrorException           *interface{}
	InvalidParameterException               *interface{}
	InvalidPolicyDocument                   *interface{}
	InvalidRequestException                 *interface{}
	PutResolverQueryLogConfigPolicyResponse *shared.PutResolverQueryLogConfigPolicyResponse
	StatusCode                              int64
	UnknownResourceException                *interface{}
}
