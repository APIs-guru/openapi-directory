package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeStateMachineForExecutionXAmzTargetEnum string

const (
	DescribeStateMachineForExecutionXAmzTargetEnumAwsStepFunctionsDescribeStateMachineForExecution DescribeStateMachineForExecutionXAmzTargetEnum = "AWSStepFunctions.DescribeStateMachineForExecution"
)

type DescribeStateMachineForExecutionHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeStateMachineForExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
