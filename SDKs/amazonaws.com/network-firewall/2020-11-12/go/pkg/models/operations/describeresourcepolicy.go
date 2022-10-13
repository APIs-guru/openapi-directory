package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeResourcePolicyXAmzTargetEnum string

const (
	DescribeResourcePolicyXAmzTargetEnumNetworkFirewall20201112DescribeResourcePolicy DescribeResourcePolicyXAmzTargetEnum = "NetworkFirewall_20201112.DescribeResourcePolicy"
)

type DescribeResourcePolicyHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeResourcePolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeResourcePolicyRequest struct {
	Headers DescribeResourcePolicyHeaders
	Request shared.DescribeResourcePolicyRequest `request:"mediaType=application/json"`
}

type DescribeResourcePolicyResponse struct {
	ContentType                    string
	DescribeResourcePolicyResponse *shared.DescribeResourcePolicyResponse
	InternalServerError            *interface{}
	InvalidRequestException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
}
