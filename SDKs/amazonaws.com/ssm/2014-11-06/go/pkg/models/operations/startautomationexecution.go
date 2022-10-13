package operations

import (
	"openapi/pkg/models/shared"
)

type StartAutomationExecutionXAmzTargetEnum string

const (
	StartAutomationExecutionXAmzTargetEnumAmazonSsmStartAutomationExecution StartAutomationExecutionXAmzTargetEnum = "AmazonSSM.StartAutomationExecution"
)

type StartAutomationExecutionHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartAutomationExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartAutomationExecutionRequest struct {
	Headers StartAutomationExecutionHeaders
	Request shared.StartAutomationExecutionRequest `request:"mediaType=application/json"`
}

type StartAutomationExecutionResponse struct {
	AutomationDefinitionNotFoundException         *interface{}
	AutomationDefinitionVersionNotFoundException  *interface{}
	AutomationExecutionLimitExceededException     *interface{}
	ContentType                                   string
	IdempotentParameterMismatch                   *interface{}
	InternalServerError                           *interface{}
	InvalidAutomationExecutionParametersException *interface{}
	InvalidTarget                                 *interface{}
	StartAutomationExecutionResult                *shared.StartAutomationExecutionResult
	StatusCode                                    int64
}
