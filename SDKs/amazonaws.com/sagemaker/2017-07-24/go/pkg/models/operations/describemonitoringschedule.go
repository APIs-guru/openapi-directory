package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMonitoringScheduleXAmzTargetEnum string

const (
	DescribeMonitoringScheduleXAmzTargetEnumSageMakerDescribeMonitoringSchedule DescribeMonitoringScheduleXAmzTargetEnum = "SageMaker.DescribeMonitoringSchedule"
)

type DescribeMonitoringScheduleHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMonitoringScheduleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeMonitoringScheduleRequest struct {
	Headers DescribeMonitoringScheduleHeaders
	Request shared.DescribeMonitoringScheduleRequest `request:"mediaType=application/json"`
}

type DescribeMonitoringScheduleResponse struct {
	ContentType                        string
	DescribeMonitoringScheduleResponse *shared.DescribeMonitoringScheduleResponse
	ResourceNotFound                   *interface{}
	StatusCode                         int64
}
