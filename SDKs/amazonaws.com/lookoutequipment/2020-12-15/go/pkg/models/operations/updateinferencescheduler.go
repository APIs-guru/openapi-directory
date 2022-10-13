package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateInferenceSchedulerXAmzTargetEnum string

const (
	UpdateInferenceSchedulerXAmzTargetEnumAwsLookoutEquipmentFrontendServiceUpdateInferenceScheduler UpdateInferenceSchedulerXAmzTargetEnum = "AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler"
)

type UpdateInferenceSchedulerHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateInferenceSchedulerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateInferenceSchedulerRequest struct {
	Headers UpdateInferenceSchedulerHeaders
	Request shared.UpdateInferenceSchedulerRequest `request:"mediaType=application/json"`
}

type UpdateInferenceSchedulerResponse struct {
	AccessDeniedException     *interface{}
	ConflictException         *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
