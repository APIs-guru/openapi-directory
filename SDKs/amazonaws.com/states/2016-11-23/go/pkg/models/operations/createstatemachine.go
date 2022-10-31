package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStateMachineXAmzTargetEnum string

const (
	CreateStateMachineXAmzTargetEnumAwsStepFunctionsCreateStateMachine CreateStateMachineXAmzTargetEnum = "AWSStepFunctions.CreateStateMachine"
)

type CreateStateMachineHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateStateMachineXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateStateMachineRequest struct {
	Headers CreateStateMachineHeaders
	Request shared.CreateStateMachineInput `request:"mediaType=application/json"`
}

type CreateStateMachineResponse struct {
	ContentType                  string
	CreateStateMachineOutput     *shared.CreateStateMachineOutput
	InvalidArn                   *interface{}
	InvalidDefinition            *interface{}
	InvalidLoggingConfiguration  *interface{}
	InvalidName                  *interface{}
	InvalidTracingConfiguration  *interface{}
	StateMachineAlreadyExists    *interface{}
	StateMachineDeleting         *interface{}
	StateMachineLimitExceeded    *interface{}
	StateMachineTypeNotSupported *interface{}
	StatusCode                   int64
	TooManyTags                  *interface{}
}
