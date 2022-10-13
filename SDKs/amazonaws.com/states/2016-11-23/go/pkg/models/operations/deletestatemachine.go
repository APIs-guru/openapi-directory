package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteStateMachineXAmzTargetEnum string

const (
	DeleteStateMachineXAmzTargetEnumAwsStepFunctionsDeleteStateMachine DeleteStateMachineXAmzTargetEnum = "AWSStepFunctions.DeleteStateMachine"
)

type DeleteStateMachineHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteStateMachineXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteStateMachineRequest struct {
	Headers DeleteStateMachineHeaders
	Request shared.DeleteStateMachineInput `request:"mediaType=application/json"`
}

type DeleteStateMachineResponse struct {
	ContentType              string
	DeleteStateMachineOutput map[string]interface{}
	InvalidArn               *interface{}
	StatusCode               int64
}
