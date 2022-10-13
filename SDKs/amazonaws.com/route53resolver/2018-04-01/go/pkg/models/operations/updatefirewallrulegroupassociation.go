package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFirewallRuleGroupAssociationXAmzTargetEnum string

const (
	UpdateFirewallRuleGroupAssociationXAmzTargetEnumRoute53ResolverUpdateFirewallRuleGroupAssociation UpdateFirewallRuleGroupAssociationXAmzTargetEnum = "Route53Resolver.UpdateFirewallRuleGroupAssociation"
)

type UpdateFirewallRuleGroupAssociationHeaders struct {
	XAmzAlgorithm     *string                                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateFirewallRuleGroupAssociationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateFirewallRuleGroupAssociationRequest struct {
	Headers UpdateFirewallRuleGroupAssociationHeaders
	Request shared.UpdateFirewallRuleGroupAssociationRequest `request:"mediaType=application/json"`
}

type UpdateFirewallRuleGroupAssociationResponse struct {
	AccessDeniedException                      *interface{}
	ConflictException                          *interface{}
	ContentType                                string
	InternalServiceErrorException              *interface{}
	ResourceNotFoundException                  *interface{}
	StatusCode                                 int64
	ThrottlingException                        *interface{}
	UpdateFirewallRuleGroupAssociationResponse *shared.UpdateFirewallRuleGroupAssociationResponse
	ValidationException                        *interface{}
}
