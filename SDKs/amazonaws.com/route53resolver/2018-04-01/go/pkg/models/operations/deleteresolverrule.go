package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteResolverRuleXAmzTargetEnum string

const (
	DeleteResolverRuleXAmzTargetEnumRoute53ResolverDeleteResolverRule DeleteResolverRuleXAmzTargetEnum = "Route53Resolver.DeleteResolverRule"
)

type DeleteResolverRuleHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteResolverRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteResolverRuleRequest struct {
	Headers DeleteResolverRuleHeaders
	Request shared.DeleteResolverRuleRequest `request:"mediaType=application/json"`
}

type DeleteResolverRuleResponse struct {
	ContentType                   string
	DeleteResolverRuleResponse    *shared.DeleteResolverRuleResponse
	InternalServiceErrorException *interface{}
	InvalidParameterException     *interface{}
	ResourceInUseException        *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
