package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStateMachineXAmzTargetEnum string

const (
	UpdateStateMachineXAmzTargetEnumAwsStepFunctionsUpdateStateMachine UpdateStateMachineXAmzTargetEnum = "AWSStepFunctions.UpdateStateMachine"
)

type UpdateStateMachineHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateStateMachineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateStateMachineRequest struct {
	Headers UpdateStateMachineHeaders
	Request shared.UpdateStateMachineInput `request:"mediaType=application/json"`
}

type UpdateStateMachineResponse struct {
	ContentType                 string
	InvalidArn                  *interface{}
	InvalidDefinition           *interface{}
	InvalidLoggingConfiguration *interface{}
	InvalidTracingConfiguration *interface{}
	MissingRequiredParameter    *interface{}
	StateMachineDeleting        *interface{}
	StateMachineDoesNotExist    *interface{}
	StatusCode                  int64
	UpdateStateMachineOutput    *shared.UpdateStateMachineOutput
}
