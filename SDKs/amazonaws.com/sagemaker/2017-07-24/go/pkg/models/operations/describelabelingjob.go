package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLabelingJobXAmzTargetEnum string

const (
	DescribeLabelingJobXAmzTargetEnumSageMakerDescribeLabelingJob DescribeLabelingJobXAmzTargetEnum = "SageMaker.DescribeLabelingJob"
)

type DescribeLabelingJobHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLabelingJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLabelingJobRequest struct {
	Headers DescribeLabelingJobHeaders
	Request shared.DescribeLabelingJobRequest `request:"mediaType=application/json"`
}

type DescribeLabelingJobResponse struct {
	ContentType                 string
	DescribeLabelingJobResponse *shared.DescribeLabelingJobResponse
	ResourceNotFound            *interface{}
	StatusCode                  int64
}
