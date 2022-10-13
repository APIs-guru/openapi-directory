package operations

import (
	"openapi/pkg/models/shared"
)

type StopExecutionXAmzTargetEnum string

const (
	StopExecutionXAmzTargetEnumAwsStepFunctionsStopExecution StopExecutionXAmzTargetEnum = "AWSStepFunctions.StopExecution"
)

type StopExecutionHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StopExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StopExecutionRequest struct {
	Headers StopExecutionHeaders
	Request shared.StopExecutionInput `request:"mediaType=application/json"`
}

type StopExecutionResponse struct {
	ContentType           string
	ExecutionDoesNotExist *interface{}
	InvalidArn            *interface{}
	StatusCode            int64
	StopExecutionOutput   *shared.StopExecutionOutput
}
