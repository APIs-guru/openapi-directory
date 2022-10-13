package operations

import (
	"openapi/pkg/models/shared"
)

type StartSyncExecutionXAmzTargetEnum string

const (
	StartSyncExecutionXAmzTargetEnumAwsStepFunctionsStartSyncExecution StartSyncExecutionXAmzTargetEnum = "AWSStepFunctions.StartSyncExecution"
)

type StartSyncExecutionHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartSyncExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartSyncExecutionRequest struct {
	Headers StartSyncExecutionHeaders
	Request shared.StartSyncExecutionInput `request:"mediaType=application/json"`
}

type StartSyncExecutionResponse struct {
	ContentType                  string
	InvalidArn                   *interface{}
	InvalidExecutionInput        *interface{}
	InvalidName                  *interface{}
	StartSyncExecutionOutput     *shared.StartSyncExecutionOutput
	StateMachineDeleting         *interface{}
	StateMachineDoesNotExist     *interface{}
	StateMachineTypeNotSupported *interface{}
	StatusCode                   int64
}
