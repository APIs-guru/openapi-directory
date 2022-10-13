package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeExperimentXAmzTargetEnum string

const (
	DescribeExperimentXAmzTargetEnumSageMakerDescribeExperiment DescribeExperimentXAmzTargetEnum = "SageMaker.DescribeExperiment"
)

type DescribeExperimentHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeExperimentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeExperimentRequest struct {
	Headers DescribeExperimentHeaders
	Request shared.DescribeExperimentRequest `request:"mediaType=application/json"`
}

type DescribeExperimentResponse struct {
	ContentType                string
	DescribeExperimentResponse *shared.DescribeExperimentResponse
	ResourceNotFound           *interface{}
	StatusCode                 int64
}
