package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeExperimentXAmzTargetEnum string

const (
	DescribeExperimentXAmzTargetEnumSageMakerDescribeExperiment DescribeExperimentXAmzTargetEnum = "SageMaker.DescribeExperiment"
)

type DescribeExperimentHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeExperimentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
