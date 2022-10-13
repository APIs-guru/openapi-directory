package operations

import (
	"openapi/pkg/models/shared"
)

type GetFirewallRuleGroupAssociationXAmzTargetEnum string

const (
	GetFirewallRuleGroupAssociationXAmzTargetEnumRoute53ResolverGetFirewallRuleGroupAssociation GetFirewallRuleGroupAssociationXAmzTargetEnum = "Route53Resolver.GetFirewallRuleGroupAssociation"
)

type GetFirewallRuleGroupAssociationHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetFirewallRuleGroupAssociationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetFirewallRuleGroupAssociationRequest struct {
	Headers GetFirewallRuleGroupAssociationHeaders
	Request shared.GetFirewallRuleGroupAssociationRequest `request:"mediaType=application/json"`
}

type GetFirewallRuleGroupAssociationResponse struct {
	AccessDeniedException                   *interface{}
	ContentType                             string
	GetFirewallRuleGroupAssociationResponse *shared.GetFirewallRuleGroupAssociationResponse
	InternalServiceErrorException           *interface{}
	ResourceNotFoundException               *interface{}
	StatusCode                              int64
	ThrottlingException                     *interface{}
}
