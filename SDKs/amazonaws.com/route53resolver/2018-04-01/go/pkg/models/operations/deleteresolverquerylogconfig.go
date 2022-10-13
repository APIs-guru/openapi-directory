package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResolverQueryLogConfigXAmzTargetEnum string

const (
	DeleteResolverQueryLogConfigXAmzTargetEnumRoute53ResolverDeleteResolverQueryLogConfig DeleteResolverQueryLogConfigXAmzTargetEnum = "Route53Resolver.DeleteResolverQueryLogConfig"
)

type DeleteResolverQueryLogConfigHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteResolverQueryLogConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteResolverQueryLogConfigRequest struct {
	Headers DeleteResolverQueryLogConfigHeaders
	Request shared.DeleteResolverQueryLogConfigRequest `request:"mediaType=application/json"`
}

type DeleteResolverQueryLogConfigResponse struct {
	AccessDeniedException                *interface{}
	ContentType                          string
	DeleteResolverQueryLogConfigResponse *shared.DeleteResolverQueryLogConfigResponse
	InternalServiceErrorException        *interface{}
	InvalidParameterException            *interface{}
	InvalidRequestException              *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
}
