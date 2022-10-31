package operations

import (
	"openapi/pkg/models/shared"
)

type StartSyncExecutionXAmzTargetEnum string

const (
	StartSyncExecutionXAmzTargetEnumAwsStepFunctionsStartSyncExecution StartSyncExecutionXAmzTargetEnum = "AWSStepFunctions.StartSyncExecution"
)

type StartSyncExecutionHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartSyncExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
