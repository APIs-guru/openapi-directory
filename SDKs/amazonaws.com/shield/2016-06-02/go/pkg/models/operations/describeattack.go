package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAttackXAmzTargetEnum string

const (
	DescribeAttackXAmzTargetEnumAwsShield20160616DescribeAttack DescribeAttackXAmzTargetEnum = "AWSShield_20160616.DescribeAttack"
)

type DescribeAttackHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAttackXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAttackRequest struct {
	Headers DescribeAttackHeaders
	Request shared.DescribeAttackRequest `request:"mediaType=application/json"`
}

type DescribeAttackResponse struct {
	AccessDeniedException  *interface{}
	ContentType            string
	DescribeAttackResponse *shared.DescribeAttackResponse
	InternalErrorException *interface{}
	StatusCode             int64
}
