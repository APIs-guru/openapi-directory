package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFirewallPolicyXAmzTargetEnum string

const (
	CreateFirewallPolicyXAmzTargetEnumNetworkFirewall20201112CreateFirewallPolicy CreateFirewallPolicyXAmzTargetEnum = "NetworkFirewall_20201112.CreateFirewallPolicy"
)

type CreateFirewallPolicyHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateFirewallPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateFirewallPolicyRequest struct {
	Headers CreateFirewallPolicyHeaders
	Request shared.CreateFirewallPolicyRequest `request:"mediaType=application/json"`
}

type CreateFirewallPolicyResponse struct {
	ContentType                   string
	CreateFirewallPolicyResponse  *shared.CreateFirewallPolicyResponse
	InsufficientCapacityException *interface{}
	InternalServerError           *interface{}
	InvalidRequestException       *interface{}
	LimitExceededException        *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
