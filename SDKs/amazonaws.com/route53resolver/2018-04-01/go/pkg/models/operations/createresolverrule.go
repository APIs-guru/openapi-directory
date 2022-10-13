package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResolverRuleXAmzTargetEnum string

const (
	CreateResolverRuleXAmzTargetEnumRoute53ResolverCreateResolverRule CreateResolverRuleXAmzTargetEnum = "Route53Resolver.CreateResolverRule"
)

type CreateResolverRuleHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateResolverRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateResolverRuleRequest struct {
	Headers CreateResolverRuleHeaders
	Request shared.CreateResolverRuleRequest `request:"mediaType=application/json"`
}

type CreateResolverRuleResponse struct {
	ContentType                   string
	CreateResolverRuleResponse    *shared.CreateResolverRuleResponse
	InternalServiceErrorException *interface{}
	InvalidParameterException     *interface{}
	InvalidRequestException       *interface{}
	LimitExceededException        *interface{}
	ResourceExistsException       *interface{}
	ResourceNotFoundException     *interface{}
	ResourceUnavailableException  *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
