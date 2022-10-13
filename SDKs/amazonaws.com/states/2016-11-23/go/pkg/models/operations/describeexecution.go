package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeExecutionXAmzTargetEnum string

const (
	DescribeExecutionXAmzTargetEnumAwsStepFunctionsDescribeExecution DescribeExecutionXAmzTargetEnum = "AWSStepFunctions.DescribeExecution"
)

type DescribeExecutionHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeExecutionRequest struct {
	Headers DescribeExecutionHeaders
	Request shared.DescribeExecutionInput `request:"mediaType=application/json"`
}

type DescribeExecutionResponse struct {
	ContentType             string
	DescribeExecutionOutput *shared.DescribeExecutionOutput
	ExecutionDoesNotExist   *interface{}
	InvalidArn              *interface{}
	StatusCode              int64
}
