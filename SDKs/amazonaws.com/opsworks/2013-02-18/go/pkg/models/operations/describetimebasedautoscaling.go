package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTimeBasedAutoScalingXAmzTargetEnum string

const (
	DescribeTimeBasedAutoScalingXAmzTargetEnumOpsWorks20130218DescribeTimeBasedAutoScaling DescribeTimeBasedAutoScalingXAmzTargetEnum = "OpsWorks_20130218.DescribeTimeBasedAutoScaling"
)

type DescribeTimeBasedAutoScalingHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTimeBasedAutoScalingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTimeBasedAutoScalingRequest struct {
	Headers DescribeTimeBasedAutoScalingHeaders
	Request shared.DescribeTimeBasedAutoScalingRequest `request:"mediaType=application/json"`
}

type DescribeTimeBasedAutoScalingResponse struct {
	ContentType                        string
	DescribeTimeBasedAutoScalingResult *shared.DescribeTimeBasedAutoScalingResult
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ValidationException                *interface{}
}
