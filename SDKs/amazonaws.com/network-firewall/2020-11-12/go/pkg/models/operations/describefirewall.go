package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFirewallXAmzTargetEnum string

const (
	DescribeFirewallXAmzTargetEnumNetworkFirewall20201112DescribeFirewall DescribeFirewallXAmzTargetEnum = "NetworkFirewall_20201112.DescribeFirewall"
)

type DescribeFirewallHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFirewallXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeFirewallRequest struct {
	Headers DescribeFirewallHeaders
	Request shared.DescribeFirewallRequest `request:"mediaType=application/json"`
}

type DescribeFirewallResponse struct {
	ContentType               string
	DescribeFirewallResponse  *shared.DescribeFirewallResponse
	InternalServerError       *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
