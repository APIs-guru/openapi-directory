package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStateMachineForExecutionXAmzTargetEnum string

const (
	DescribeStateMachineForExecutionXAmzTargetEnumAwsStepFunctionsDescribeStateMachineForExecution DescribeStateMachineForExecutionXAmzTargetEnum = "AWSStepFunctions.DescribeStateMachineForExecution"
)

type DescribeStateMachineForExecutionHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeStateMachineForExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeStateMachineForExecutionRequest struct {
	Headers DescribeStateMachineForExecutionHeaders
	Request shared.DescribeStateMachineForExecutionInput `request:"mediaType=application/json"`
}

type DescribeStateMachineForExecutionResponse struct {
	ContentType                            string
	DescribeStateMachineForExecutionOutput *shared.DescribeStateMachineForExecutionOutput
	ExecutionDoesNotExist                  *interface{}
	InvalidArn                             *interface{}
	StatusCode                             int64
}
