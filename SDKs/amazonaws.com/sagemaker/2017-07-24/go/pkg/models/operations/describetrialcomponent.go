package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeTrialComponentXAmzTargetEnum string

const (
	DescribeTrialComponentXAmzTargetEnumSageMakerDescribeTrialComponent DescribeTrialComponentXAmzTargetEnum = "SageMaker.DescribeTrialComponent"
)

type DescribeTrialComponentHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeTrialComponentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeTrialComponentRequest struct {
	Headers DescribeTrialComponentHeaders
	Request shared.DescribeTrialComponentRequest `request:"mediaType=application/json"`
}

type DescribeTrialComponentResponse struct {
	ContentType                    string
	DescribeTrialComponentResponse *shared.DescribeTrialComponentResponse
	ResourceNotFound               *interface{}
	StatusCode                     int64
}
