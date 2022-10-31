package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFirewallPolicyChangeProtectionXAmzTargetEnum string

const (
	UpdateFirewallPolicyChangeProtectionXAmzTargetEnumNetworkFirewall20201112UpdateFirewallPolicyChangeProtection UpdateFirewallPolicyChangeProtectionXAmzTargetEnum = "NetworkFirewall_20201112.UpdateFirewallPolicyChangeProtection"
)

type UpdateFirewallPolicyChangeProtectionHeaders struct {
	XAmzAlgorithm     *string                                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateFirewallPolicyChangeProtectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
