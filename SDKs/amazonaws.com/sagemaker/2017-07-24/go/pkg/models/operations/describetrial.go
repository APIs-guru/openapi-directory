package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTrialXAmzTargetEnum string

const (
	DescribeTrialXAmzTargetEnumSageMakerDescribeTrial DescribeTrialXAmzTargetEnum = "SageMaker.DescribeTrial"
)

type DescribeTrialHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTrialXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTrialRequest struct {
	Headers DescribeTrialHeaders
	Request shared.DescribeTrialRequest `request:"mediaType=application/json"`
}

type DescribeTrialResponse struct {
	ContentType           string
	DescribeTrialResponse *shared.DescribeTrialResponse
	ResourceNotFound      *interface{}
	StatusCode            int64
}
