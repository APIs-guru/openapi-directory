package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFirewallDescriptionXAmzTargetEnum string

const (
	UpdateFirewallDescriptionXAmzTargetEnumNetworkFirewall20201112UpdateFirewallDescription UpdateFirewallDescriptionXAmzTargetEnum = "NetworkFirewall_20201112.UpdateFirewallDescription"
)

type UpdateFirewallDescriptionHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateFirewallDescriptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateFirewallDescriptionRequest struct {
	Headers UpdateFirewallDescriptionHeaders
	Request shared.UpdateFirewallDescriptionRequest `request:"mediaType=application/json"`
}

type UpdateFirewallDescriptionResponse struct {
	ContentType                       string
	InternalServerError               *interface{}
	InvalidRequestException           *interface{}
	InvalidTokenException             *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	ThrottlingException               *interface{}
	UpdateFirewallDescriptionResponse *shared.UpdateFirewallDescriptionResponse
}
