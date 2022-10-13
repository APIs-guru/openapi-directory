package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFirewallPolicyChangeProtectionXAmzTargetEnum string

const (
	UpdateFirewallPolicyChangeProtectionXAmzTargetEnumNetworkFirewall20201112UpdateFirewallPolicyChangeProtection UpdateFirewallPolicyChangeProtectionXAmzTargetEnum = "NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection"
)

type UpdateFirewallPolicyChangeProtectionHeaders struct {
	XAmzAlgorithm     *string                                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateFirewallPolicyChangeProtectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateFirewallPolicyChangeProtectionRequest struct {
	Headers UpdateFirewallPolicyChangeProtectionHeaders
	Request shared.UpdateFirewallPolicyChangeProtectionRequest `request:"mediaType=application/json"`
}

type UpdateFirewallPolicyChangeProtectionResponse struct {
	ContentType                                  string
	InternalServerError                          *interface{}
	InvalidRequestException                      *interface{}
	InvalidTokenException                        *interface{}
	ResourceNotFoundException                    *interface{}
	ResourceOwnerCheckException                  *interface{}
	StatusCode                                   int64
	ThrottlingException                          *interface{}
	UpdateFirewallPolicyChangeProtectionResponse *shared.UpdateFirewallPolicyChangeProtectionResponse
}
