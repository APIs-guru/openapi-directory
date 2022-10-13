package operations

import (
	"openapi/pkg/models/shared"
)

type StartMonitoringScheduleXAmzTargetEnum string

const (
	StartMonitoringScheduleXAmzTargetEnumSageMakerStartMonitoringSchedule StartMonitoringScheduleXAmzTargetEnum = "SageMaker.StartMonitoringSchedule"
)

type StartMonitoringScheduleHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartMonitoringScheduleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartMonitoringScheduleRequest struct {
	Headers StartMonitoringScheduleHeaders
	Request shared.StartMonitoringScheduleRequest `request:"mediaType=application/json"`
}

type StartMonitoringScheduleResponse struct {
	ContentType      string
	ResourceNotFound *interface{}
	StatusCode       int64
}
