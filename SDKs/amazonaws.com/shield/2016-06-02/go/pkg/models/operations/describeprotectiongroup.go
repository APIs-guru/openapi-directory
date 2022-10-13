package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProtectionGroupXAmzTargetEnum string

const (
	DescribeProtectionGroupXAmzTargetEnumAwsShield20160616DescribeProtectionGroup DescribeProtectionGroupXAmzTargetEnum = "AWSShield_20160616.DescribeProtectionGroup"
)

type DescribeProtectionGroupHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeProtectionGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeProtectionGroupRequest struct {
	Headers DescribeProtectionGroupHeaders
	Request shared.DescribeProtectionGroupRequest `request:"mediaType=application/json"`
}

type DescribeProtectionGroupResponse struct {
	ContentType                     string
	DescribeProtectionGroupResponse *shared.DescribeProtectionGroupResponse
	InternalErrorException          *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
