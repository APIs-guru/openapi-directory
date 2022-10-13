package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFirewallPolicyXAmzTargetEnum string

const (
	UpdateFirewallPolicyXAmzTargetEnumNetworkFirewall20201112UpdateFirewallPolicy UpdateFirewallPolicyXAmzTargetEnum = "NetworkFirewall_20201112.UpdateFirewallPolicy"
)

type UpdateFirewallPolicyHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateFirewallPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateFirewallPolicyRequest struct {
	Headers UpdateFirewallPolicyHeaders
	Request shared.UpdateFirewallPolicyRequest `request:"mediaType=application/json"`
}

type UpdateFirewallPolicyResponse struct {
	ContentType                  string
	InternalServerError          *interface{}
	InvalidRequestException      *interface{}
	InvalidTokenException        *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	ThrottlingException          *interface{}
	UpdateFirewallPolicyResponse *shared.UpdateFirewallPolicyResponse
}
