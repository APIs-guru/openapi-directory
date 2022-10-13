package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFirewallPolicyXAmzTargetEnum string

const (
	DescribeFirewallPolicyXAmzTargetEnumNetworkFirewall20201112DescribeFirewallPolicy DescribeFirewallPolicyXAmzTargetEnum = "NetworkFirewall_20201112.DescribeFirewallPolicy"
)

type DescribeFirewallPolicyHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFirewallPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeFirewallPolicyRequest struct {
	Headers DescribeFirewallPolicyHeaders
	Request shared.DescribeFirewallPolicyRequest `request:"mediaType=application/json"`
}

type DescribeFirewallPolicyResponse struct {
	ContentType                    string
	DescribeFirewallPolicyResponse *shared.DescribeFirewallPolicyResponse
	InternalServerError            *interface{}
	InvalidRequestException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
