package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFirewallPolicyXAmzTargetEnum string

const (
	DeleteFirewallPolicyXAmzTargetEnumNetworkFirewall20201112DeleteFirewallPolicy DeleteFirewallPolicyXAmzTargetEnum = "NetworkFirewall_20201112.DeleteFirewallPolicy"
)

type DeleteFirewallPolicyHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteFirewallPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteFirewallPolicyRequest struct {
	Headers DeleteFirewallPolicyHeaders
	Request shared.DeleteFirewallPolicyRequest `request:"mediaType=application/json"`
}

type DeleteFirewallPolicyResponse struct {
	ContentType                   string
	DeleteFirewallPolicyResponse  *shared.DeleteFirewallPolicyResponse
	InternalServerError           *interface{}
	InvalidOperationException     *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UnsupportedOperationException *interface{}
}
