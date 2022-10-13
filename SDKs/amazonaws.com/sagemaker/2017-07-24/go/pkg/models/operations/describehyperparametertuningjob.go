package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeHyperParameterTuningJobXAmzTargetEnum string

const (
	DescribeHyperParameterTuningJobXAmzTargetEnumSageMakerDescribeHyperParameterTuningJob DescribeHyperParameterTuningJobXAmzTargetEnum = "SageMaker.DescribeHyperParameterTuningJob"
)

type DescribeHyperParameterTuningJobHeaders struct {
	XAmzAlgorithm     *string                                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeHyperParameterTuningJobXAmzTargetEnum `header:"name=X-Amz-Target"`
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
