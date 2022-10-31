package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFirewallPolicyXAmzTargetEnum string

const (
	DescribeFirewallPolicyXAmzTargetEnumNetworkFirewall20201112DescribeFirewallPolicy DescribeFirewallPolicyXAmzTargetEnum = "NetworkFirewall_20201112.DescribeFirewallPolicy"
)

type DescribeFirewallPolicyHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeFirewallPolicyXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
