package operations

import (
	"openapi/pkg/models/shared"
)

type StartExecutionXAmzTargetEnum string

const (
	StartExecutionXAmzTargetEnumAwsStepFunctionsStartExecution StartExecutionXAmzTargetEnum = "AWSStepFunctions.StartExecution"
)

type StartExecutionHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartExecutionRequest struct {
	Headers StartExecutionHeaders
	Request shared.StartExecutionInput `request:"mediaType=application/json"`
}

type StartExecutionResponse struct {
	ContentType              string
	ExecutionAlreadyExists   *interface{}
	ExecutionLimitExceeded   *interface{}
	InvalidArn               *interface{}
	InvalidExecutionInput    *interface{}
	InvalidName              *interface{}
	StartExecutionOutput     *shared.StartExecutionOutput
	StateMachineDeleting     *interface{}
	StateMachineDoesNotExist *interface{}
	StatusCode               int64
}
