package operations

import (
	"openapi/pkg/models/shared"
)

type StartChangeRequestExecutionXAmzTargetEnum string

const (
	StartChangeRequestExecutionXAmzTargetEnumAmazonSsmStartChangeRequestExecution StartChangeRequestExecutionXAmzTargetEnum = "AmazonSSM.StartChangeRequestExecution"
)

type StartChangeRequestExecutionHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartChangeRequestExecutionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartChangeRequestExecutionRequest struct {
	Headers StartChangeRequestExecutionHeaders
	Request shared.StartChangeRequestExecutionRequest `request:"mediaType=application/json"`
}

type StartChangeRequestExecutionResponse struct {
	AutomationDefinitionNotApprovedException      *interface{}
	AutomationDefinitionNotFoundException         *interface{}
	AutomationDefinitionVersionNotFoundException  *interface{}
	AutomationExecutionLimitExceededException     *interface{}
	ContentType                                   string
	IdempotentParameterMismatch                   *interface{}
	InternalServerError                           *interface{}
	InvalidAutomationExecutionParametersException *interface{}
	StartChangeRequestExecutionResult             *shared.StartChangeRequestExecutionResult
	StatusCode                                    int64
}
