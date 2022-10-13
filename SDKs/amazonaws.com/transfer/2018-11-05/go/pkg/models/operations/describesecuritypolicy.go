package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSecurityPolicyXAmzTargetEnum string

const (
	DescribeSecurityPolicyXAmzTargetEnumTransferServiceDescribeSecurityPolicy DescribeSecurityPolicyXAmzTargetEnum = "TransferService.DescribeSecurityPolicy"
)

type DescribeSecurityPolicyHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSecurityPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeSecurityPolicyRequest struct {
	Headers DescribeSecurityPolicyHeaders
	Request shared.DescribeSecurityPolicyRequest `request:"mediaType=application/json"`
}

type DescribeSecurityPolicyResponse struct {
	ContentType                    string
	DescribeSecurityPolicyResponse *shared.DescribeSecurityPolicyResponse
	InternalServiceError           *interface{}
	InvalidRequestException        *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
}
