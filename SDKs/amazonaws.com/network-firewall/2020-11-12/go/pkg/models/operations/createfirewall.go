package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFirewallXAmzTargetEnum string

const (
	CreateFirewallXAmzTargetEnumNetworkFirewall20201112CreateFirewall CreateFirewallXAmzTargetEnum = "NetworkFirewall_20201112.CreateFirewall"
)

type CreateFirewallHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateFirewallXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateFirewallRequest struct {
	Headers CreateFirewallHeaders
	Request shared.CreateFirewallRequest `request:"mediaType=application/json"`
}

type CreateFirewallResponse struct {
	ContentType                   string
	CreateFirewallResponse        *shared.CreateFirewallResponse
	InsufficientCapacityException *interface{}
	InternalServerError           *interface{}
	InvalidOperationException     *interface{}
	InvalidRequestException       *interface{}
	LimitExceededException        *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
