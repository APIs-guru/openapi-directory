package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLabelingJobXAmzTargetEnum string

const (
	CreateLabelingJobXAmzTargetEnumSageMakerCreateLabelingJob CreateLabelingJobXAmzTargetEnum = "SageMaker.CreateLabelingJob"
)

type CreateLabelingJobHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLabelingJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLabelingJobRequest struct {
	Headers CreateLabelingJobHeaders
	Request shared.CreateLabelingJobRequest `request:"mediaType=application/json"`
}

type CreateLabelingJobResponse struct {
	ContentType               string
	CreateLabelingJobResponse *shared.CreateLabelingJobResponse
	ResourceInUse             *interface{}
	ResourceLimitExceeded     *interface{}
	StatusCode                int64
}
