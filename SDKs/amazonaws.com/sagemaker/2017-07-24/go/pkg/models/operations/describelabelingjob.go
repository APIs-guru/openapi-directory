package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLabelingJobXAmzTargetEnum string

const (
	DescribeLabelingJobXAmzTargetEnumSageMakerDescribeLabelingJob DescribeLabelingJobXAmzTargetEnum = "SageMaker.DescribeLabelingJob"
)

type DescribeLabelingJobHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLabelingJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
