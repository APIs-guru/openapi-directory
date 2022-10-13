package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMonitoringScheduleXAmzTargetEnum string

const (
	UpdateMonitoringScheduleXAmzTargetEnumSageMakerUpdateMonitoringSchedule UpdateMonitoringScheduleXAmzTargetEnum = "SageMaker.UpdateMonitoringSchedule"
)

type UpdateMonitoringScheduleHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateMonitoringScheduleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateMonitoringScheduleRequest struct {
	Headers UpdateMonitoringScheduleHeaders
	Request shared.UpdateMonitoringScheduleRequest `request:"mediaType=application/json"`
}

type UpdateMonitoringScheduleResponse struct {
	ContentType                      string
	ResourceLimitExceeded            *interface{}
	ResourceNotFound                 *interface{}
	StatusCode                       int64
	UpdateMonitoringScheduleResponse *shared.UpdateMonitoringScheduleResponse
}
