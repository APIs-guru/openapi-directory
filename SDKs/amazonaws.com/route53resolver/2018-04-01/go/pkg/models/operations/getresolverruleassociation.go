package operations

import (
	"openapi/pkg/models/shared"
)

type GetResolverRuleAssociationXAmzTargetEnum string

const (
	GetResolverRuleAssociationXAmzTargetEnumRoute53ResolverGetResolverRuleAssociation GetResolverRuleAssociationXAmzTargetEnum = "Route53Resolver.GetResolverRuleAssociation"
)

type GetResolverRuleAssociationHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetResolverRuleAssociationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetResolverRuleAssociationRequest struct {
	Headers GetResolverRuleAssociationHeaders
	Request shared.GetResolverRuleAssociationRequest `request:"mediaType=application/json"`
}

type GetResolverRuleAssociationResponse struct {
	ContentType                        string
	GetResolverRuleAssociationResponse *shared.GetResolverRuleAssociationResponse
	InternalServiceErrorException      *interface{}
	InvalidParameterException          *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
}
