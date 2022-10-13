package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAttackStatisticsXAmzTargetEnum string

const (
	DescribeAttackStatisticsXAmzTargetEnumAwsShield20160616DescribeAttackStatistics DescribeAttackStatisticsXAmzTargetEnum = "AWSShield_20160616.DescribeAttackStatistics"
)

type DescribeAttackStatisticsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAttackStatisticsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAttackStatisticsRequest struct {
	Headers DescribeAttackStatisticsHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DescribeAttackStatisticsResponse struct {
	ContentType                      string
	DescribeAttackStatisticsResponse *shared.DescribeAttackStatisticsResponse
	InternalErrorException           *interface{}
	StatusCode                       int64
}
