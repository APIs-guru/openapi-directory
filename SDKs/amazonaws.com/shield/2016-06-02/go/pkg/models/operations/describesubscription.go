package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeSubscriptionXAmzTargetEnum string

const (
	DescribeSubscriptionXAmzTargetEnumAwsShield20160616DescribeSubscription DescribeSubscriptionXAmzTargetEnum = "AWSShield_20160616.DescribeSubscription"
)

type DescribeSubscriptionHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeSubscriptionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeSubscriptionRequest struct {
	Headers DescribeSubscriptionHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DescribeSubscriptionResponse struct {
	ContentType                  string
	DescribeSubscriptionResponse *shared.DescribeSubscriptionResponse
	InternalErrorException       *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
}
