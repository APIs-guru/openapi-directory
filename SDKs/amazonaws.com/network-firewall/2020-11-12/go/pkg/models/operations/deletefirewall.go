package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFirewallXAmzTargetEnum string

const (
	DeleteFirewallXAmzTargetEnumNetworkFirewall20201112DeleteFirewall DeleteFirewallXAmzTargetEnum = "NetworkFirewall_20201112.DeleteFirewall"
)

type DeleteFirewallHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteFirewallXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteFirewallRequest struct {
	Headers DeleteFirewallHeaders
	Request shared.DeleteFirewallRequest `request:"mediaType=application/json"`
}

type DeleteFirewallResponse struct {
	ContentType                   string
	DeleteFirewallResponse        *shared.DeleteFirewallResponse
	InternalServerError           *interface{}
	InvalidOperationException     *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UnsupportedOperationException *interface{}
}
