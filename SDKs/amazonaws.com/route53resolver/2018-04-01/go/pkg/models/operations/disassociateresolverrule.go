package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateResolverRuleXAmzTargetEnum string

const (
	DisassociateResolverRuleXAmzTargetEnumRoute53ResolverDisassociateResolverRule DisassociateResolverRuleXAmzTargetEnum = "Route53Resolver.DisassociateResolverRule"
)

type DisassociateResolverRuleHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateResolverRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DisassociateResolverRuleRequest struct {
	Headers DisassociateResolverRuleHeaders
	Request shared.DisassociateResolverRuleRequest `request:"mediaType=application/json"`
}

type DisassociateResolverRuleResponse struct {
	ContentType                      string
	DisassociateResolverRuleResponse *shared.DisassociateResolverRuleResponse
	InternalServiceErrorException    *interface{}
	InvalidParameterException        *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	ThrottlingException              *interface{}
}
