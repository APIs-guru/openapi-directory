package operations

import (
	"openapi/pkg/models/shared"
)

type StartDataIngestionJobXAmzTargetEnum string

const (
	StartDataIngestionJobXAmzTargetEnumAwsLookoutEquipmentFrontendServiceStartDataIngestionJob StartDataIngestionJobXAmzTargetEnum = "AWSLookoutEquipmentFrontendService.StartDataIngestionJob"
)

type StartDataIngestionJobHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartDataIngestionJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartDataIngestionJobRequest struct {
	Headers StartDataIngestionJobHeaders
	Request shared.StartDataIngestionJobRequest `request:"mediaType=application/json"`
}

type StartDataIngestionJobResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ResourceNotFoundException     *interface{}
	ServiceQuotaExceededException *interface{}
	StartDataIngestionJobResponse *shared.StartDataIngestionJobResponse
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
