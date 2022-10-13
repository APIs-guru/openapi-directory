package operations

import (
	"openapi/pkg/models/shared"
)

type CreateModelXAmzTargetEnum string

const (
	CreateModelXAmzTargetEnumAwsLookoutEquipmentFrontendServiceCreateModel CreateModelXAmzTargetEnum = "AWSLookoutEquipmentFrontendService.CreateModel"
)

type CreateModelHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateModelXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateModelRequest struct {
	Headers CreateModelHeaders
	Request shared.CreateModelRequest `request:"mediaType=application/json"`
}

type CreateModelResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	CreateModelResponse           *shared.CreateModelResponse
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
