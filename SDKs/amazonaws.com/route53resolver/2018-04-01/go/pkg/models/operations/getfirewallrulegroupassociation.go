package operations

import (
	"openapi/pkg/models/shared"
)

type GetFirewallRuleGroupAssociationXAmzTargetEnum string

const (
	GetFirewallRuleGroupAssociationXAmzTargetEnumRoute53ResolverGetFirewallRuleGroupAssociation GetFirewallRuleGroupAssociationXAmzTargetEnum = "Route53Resolver.GetFirewallRuleGroupAssociation"
)

type GetFirewallRuleGroupAssociationHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetFirewallRuleGroupAssociationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
