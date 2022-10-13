package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLoadBasedAutoScalingXAmzTargetEnum string

const (
	DescribeLoadBasedAutoScalingXAmzTargetEnumOpsWorks20130218DescribeLoadBasedAutoScaling DescribeLoadBasedAutoScalingXAmzTargetEnum = "OpsWorks_20130218.DescribeLoadBasedAutoScaling"
)

type DescribeLoadBasedAutoScalingHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLoadBasedAutoScalingXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLoadBasedAutoScalingRequest struct {
	Headers DescribeLoadBasedAutoScalingHeaders
	Request shared.DescribeLoadBasedAutoScalingRequest `request:"mediaType=application/json"`
}

type DescribeLoadBasedAutoScalingResponse struct {
	ContentType                        string
	DescribeLoadBasedAutoScalingResult *shared.DescribeLoadBasedAutoScalingResult
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ValidationException                *interface{}
}
