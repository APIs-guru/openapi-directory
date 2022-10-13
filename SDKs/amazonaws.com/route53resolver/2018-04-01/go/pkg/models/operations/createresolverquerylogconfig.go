package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResolverQueryLogConfigXAmzTargetEnum string

const (
	CreateResolverQueryLogConfigXAmzTargetEnumRoute53ResolverCreateResolverQueryLogConfig CreateResolverQueryLogConfigXAmzTargetEnum = "Route53Resolver.CreateResolverQueryLogConfig"
)

type CreateResolverQueryLogConfigHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateResolverQueryLogConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateResolverQueryLogConfigRequest struct {
	Headers CreateResolverQueryLogConfigHeaders
	Request shared.CreateResolverQueryLogConfigRequest `request:"mediaType=application/json"`
}

type CreateResolverQueryLogConfigResponse struct {
	AccessDeniedException                *interface{}
	ContentType                          string
	CreateResolverQueryLogConfigResponse *shared.CreateResolverQueryLogConfigResponse
	InternalServiceErrorException        *interface{}
	InvalidParameterException            *interface{}
	InvalidRequestException              *interface{}
	LimitExceededException               *interface{}
	ResourceExistsException              *interface{}
	ResourceNotFoundException            *interface{}
	StatusCode                           int64
	ThrottlingException                  *interface{}
}
