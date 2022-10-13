package operations

import (
	"openapi/pkg/models/shared"
)

type StopMonitoringScheduleXAmzTargetEnum string

const (
	StopMonitoringScheduleXAmzTargetEnumSageMakerStopMonitoringSchedule StopMonitoringScheduleXAmzTargetEnum = "SageMaker.StopMonitoringSchedule"
)

type StopMonitoringScheduleHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopMonitoringScheduleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopMonitoringScheduleRequest struct {
	Headers StopMonitoringScheduleHeaders
	Request shared.StopMonitoringScheduleRequest `request:"mediaType=application/json"`
}

type StopMonitoringScheduleResponse struct {
	ContentType      string
	ResourceNotFound *interface{}
	StatusCode       int64
}
