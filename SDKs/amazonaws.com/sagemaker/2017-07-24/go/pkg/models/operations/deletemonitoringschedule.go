package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteMonitoringScheduleXAmzTargetEnum string

const (
	DeleteMonitoringScheduleXAmzTargetEnumSageMakerDeleteMonitoringSchedule DeleteMonitoringScheduleXAmzTargetEnum = "SageMaker.DeleteMonitoringSchedule"
)

type DeleteMonitoringScheduleHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteMonitoringScheduleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
