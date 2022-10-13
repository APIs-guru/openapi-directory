package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMonitoringScheduleXAmzTargetEnum string

const (
	DeleteMonitoringScheduleXAmzTargetEnumSageMakerDeleteMonitoringSchedule DeleteMonitoringScheduleXAmzTargetEnum = "SageMaker.DeleteMonitoringSchedule"
)

type DeleteMonitoringScheduleHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteMonitoringScheduleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteMonitoringScheduleRequest struct {
	Headers DeleteMonitoringScheduleHeaders
	Request shared.DeleteMonitoringScheduleRequest `request:"mediaType=application/json"`
}

type DeleteMonitoringScheduleResponse struct {
	ContentType      string
	ResourceNotFound *interface{}
	StatusCode       int64
}
