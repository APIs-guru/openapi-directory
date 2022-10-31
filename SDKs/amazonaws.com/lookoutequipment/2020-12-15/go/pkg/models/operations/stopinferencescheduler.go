package operations

import (
	"openapi/pkg/models/shared"
)

type StopInferenceSchedulerXAmzTargetEnum string

const (
	StopInferenceSchedulerXAmzTargetEnumAwsLookoutEquipmentFrontendServiceStopInferenceScheduler StopInferenceSchedulerXAmzTargetEnum = "AWSLookoutEquipmentFrontendService.StopInferenceScheduler"
)

type StopInferenceSchedulerHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StopInferenceSchedulerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type StopInferenceSchedulerRequest struct {
	Headers StopInferenceSchedulerHeaders
	Request shared.StopInferenceSchedulerRequest `request:"mediaType=application/json"`
}

type StopInferenceSchedulerResponse struct {
	AccessDeniedException          *interface{}
	ConflictException              *interface{}
	ContentType                    string
	InternalServerException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	StopInferenceSchedulerResponse *shared.StopInferenceSchedulerResponse
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
