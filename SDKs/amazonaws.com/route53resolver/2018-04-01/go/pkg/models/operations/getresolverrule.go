package operations

import (
	"openapi/pkg/models/shared"
)

type GetResolverRuleXAmzTargetEnum string

const (
	GetResolverRuleXAmzTargetEnumRoute53ResolverGetResolverRule GetResolverRuleXAmzTargetEnum = "Route53Resolver.GetResolverRule"
)

type GetResolverRuleHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetResolverRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetResolverRuleRequest struct {
	Headers GetResolverRuleHeaders
	Request shared.GetResolverRuleRequest `request:"mediaType=application/json"`
}

type GetResolverRuleResponse struct {
	ContentType                   string
	GetResolverRuleResponse       *shared.GetResolverRuleResponse
	InternalServiceErrorException *interface{}
	InvalidParameterException     *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
