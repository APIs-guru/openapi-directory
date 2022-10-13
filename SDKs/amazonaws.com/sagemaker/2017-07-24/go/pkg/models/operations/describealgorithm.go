package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeAlgorithmXAmzTargetEnum string

const (
	DescribeAlgorithmXAmzTargetEnumSageMakerDescribeAlgorithm DescribeAlgorithmXAmzTargetEnum = "SageMaker.DescribeAlgorithm"
)

type DescribeAlgorithmHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeAlgorithmXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeAlgorithmRequest struct {
	Headers DescribeAlgorithmHeaders
	Request shared.DescribeAlgorithmInput `request:"mediaType=application/json"`
}

type DescribeAlgorithmResponse struct {
	ContentType             string
	DescribeAlgorithmOutput *shared.DescribeAlgorithmOutput
	StatusCode              int64
}
