package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeHyperParameterTuningJobXAmzTargetEnum string

const (
	DescribeHyperParameterTuningJobXAmzTargetEnumSageMakerDescribeHyperParameterTuningJob DescribeHyperParameterTuningJobXAmzTargetEnum = "SageMaker.DescribeHyperParameterTuningJob"
)

type DescribeHyperParameterTuningJobHeaders struct {
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeHyperParameterTuningJobXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeHyperParameterTuningJobRequest struct {
	Headers DescribeHyperParameterTuningJobHeaders
	Request shared.DescribeHyperParameterTuningJobRequest `request:"mediaType=application/json"`
}

type DescribeHyperParameterTuningJobResponse struct {
	ContentType                             string
	DescribeHyperParameterTuningJobResponse *shared.DescribeHyperParameterTuningJobResponse
	ResourceNotFound                        *interface{}
	StatusCode                              int64
}
