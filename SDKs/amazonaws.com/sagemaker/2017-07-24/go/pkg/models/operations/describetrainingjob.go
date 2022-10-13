package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTrainingJobXAmzTargetEnum string

const (
	DescribeTrainingJobXAmzTargetEnumSageMakerDescribeTrainingJob DescribeTrainingJobXAmzTargetEnum = "SageMaker.DescribeTrainingJob"
)

type DescribeTrainingJobHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTrainingJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTrainingJobRequest struct {
	Headers DescribeTrainingJobHeaders
	Request shared.DescribeTrainingJobRequest `request:"mediaType=application/json"`
}

type DescribeTrainingJobResponse struct {
	ContentType                 string
	DescribeTrainingJobResponse *shared.DescribeTrainingJobResponse
	ResourceNotFound            *interface{}
	StatusCode                  int64
}
