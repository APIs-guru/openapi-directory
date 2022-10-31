package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFirewallDeleteProtectionXAmzTargetEnum string

const (
	UpdateFirewallDeleteProtectionXAmzTargetEnumNetworkFirewall20201112UpdateFirewallDeleteProtection UpdateFirewallDeleteProtectionXAmzTargetEnum = "NetworkFirewall_20201112.UpdateFirewallDeleteProtection"
)

type UpdateFirewallDeleteProtectionHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateFirewallDeleteProtectionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateFirewallDeleteProtectionRequest struct {
	Headers UpdateFirewallDeleteProtectionHeaders
	Request shared.UpdateFirewallDeleteProtectionRequest `request:"mediaType=application/json"`
}

type UpdateFirewallDeleteProtectionResponse struct {
	ContentType                            string
	InternalServerError                    *interface{}
	InvalidRequestException                *interface{}
	InvalidTokenException                  *interface{}
	ResourceNotFoundException              *interface{}
	ResourceOwnerCheckException            *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
	UpdateFirewallDeleteProtectionResponse *shared.UpdateFirewallDeleteProtectionResponse
}
